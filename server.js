const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Agrega el middleware 'cors'
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'latinpowermusic'
});

// Conecta a la base de datos MySQL
connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Define una ruta de inicio de sesión
app.post('/login', (req, res) => {
    if (!req.body) {
        return res.status(400).send({ error: 'Bad request' });
    }
    
    const { correo, contrasena } = req.body;

    // Busca un usuario con el correo electrónico y la contraseña proporcionados
    const sql = 'SELECT * FROM administradores WHERE correo = ? AND contrasena = ?';
    connection.query(sql, [correo, contrasena], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        if (results.length === 0) {
            console.error(err);
            res.status(401).send('Correo electrónico o contraseña incorrectos');
            return;
        }

        // Si el usuario existe, crea un token JWT y envíalo como respuesta
        const token = jwt.sign({ id: results[0].id }, 'localhost', { expiresIn: '1h' });
        res.send({ success: true, token });
    });
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor web iniciado en el puerto 3000');
});