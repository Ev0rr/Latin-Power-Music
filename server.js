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
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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

app.post('/crud-admins', (req, res) => {
    const { nombre, apellidos, telefono, correo, contrasena, imagen } = req.body;

    const sql = 'INSERT INTO administradores (nombre, apellidos, telefono, correo, contrasena, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nombre, apellidos, telefono, correo, contrasena, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar administrador');
            return;
        }

        res.status(201).send('Administrador agregado correctamente');
    });
});

// Obtiene todos los administradores
app.get('/crud-admins', (req, res) => {
    const sql = 'SELECT * FROM administradores';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener administradores');
            return;
        }

        res.json(results);
    });
});

// Actualiza un administrador existente
app.put('/crud-admins/:id', (req, res) => {
    const { nombre, apellidos, telefono, correo, contrasena, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE administradores SET nombre = ?, apellidos = ?, telefono = ?, correo = ?, contrasena = ?, imagen = ? WHERE id_administrador = ?';
    connection.query(sql, [nombre, apellidos, telefono, correo, contrasena, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar administrador');
            return;
        }

        res.status(200).send('Administrador actualizado correctamente');
    });
});

// Elimina un administrador
app.delete('/crud-admins/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM administradores WHERE id_administrador = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar administrador');
            return;
        }

        res.status(200).send('Administrador eliminado correctamente');
    });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en el puerto ${PORT}`);
});
