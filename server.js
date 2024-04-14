const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Permitir solicitudes desde la URL de tu aplicación Angular en Vercel
app.use(cors({
  origin: ['https://latin-power-music.vercel.app', 'http://localhost:4200'],
  credentials: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'bplygdu6jwg3nwtszvhf-mysql.services.clever-cloud.com',
    user: 'uf83iptrh2lnmylj',
    password: '4vv6VVOxZiXVTLEmd9sL',
    database: 'bplygdu6jwg3nwtszvhf',
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
        const token = jwt.sign({ id: results[0].id }, 'bplygdu6jwg3nwtszvhf-mysql.services.clever-cloud.com', { expiresIn: '1h' });
        res.send({ success: true, token });
    });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en el puerto ${PORT}`);
});