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
        setTimeout(handleDisconnect, 2000);
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

        console.log('Resultados de la consulta:', results);
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-artists', (req, res) => {
    const { nombre, descripcion, imagen } = req.body;

    const sql = 'INSERT INTO artistas (nombre, descripcion, imagen) VALUES (?, ?, ?)';
    connection.query(sql, [nombre, descripcion, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar artista');
            return;
        }

        res.status(201).send('Artista agregado correctamente');
    });
});

// Obtiene todos los artistas
app.get('/crud-artists', (req, res) => {
    const sql = 'SELECT * FROM artistas';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener artistas');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza un artista existente
app.put('/crud-artists/:id', (req, res) => {
    const { nombre, descripcion, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE artistas SET nombre = ?, descripcion = ?, imagen = ? WHERE id_artista = ?';
    connection.query(sql, [nombre, descripcion, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar artista');
            return;
        }

        res.status(200).send('Artista actualizado correctamente');
    });
});

// Elimina un artista
app.delete('/crud-artists/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM artistas WHERE id_artista = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar artista');
            return;
        }

        res.status(200).send('Artista eliminado correctamente');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-albums', (req, res) => {
    const { artista, titulo, precio, descripcion, fecha, imagen } = req.body;

    const sql = 'INSERT INTO albumes (artista, titulo, precio, descripcion, fecha, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [artista, titulo, precio, descripcion, fecha, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar álbum');
            return;
        }

        res.status(201).send('Álbum agregado correctamente');
    });
});

// Obtiene todos los administradores
app.get('/crud-albums', (req, res) => {
    const sql = 'SELECT * FROM albumes';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener álbumes');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza un álbum existente
app.put('/crud-albums/:id', (req, res) => {
    const { artista, titulo, precio, descripcion, fecha, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE albumes SET artista = ?, titulo = ?, precio = ?, descripcion = ?, fecha = ?, imagen = ? WHERE id_album = ?';
    connection.query(sql, [artista, titulo, precio, descripcion, fecha, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar album');
            return;
        }

        res.status(200).send('Álbum actualizado correctamente');
    });
});

// Elimina un administrador
app.delete('/crud-albums/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM albumes WHERE id_album = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar album');
            return;
        }

        res.status(200).send('Álbum eliminado correctamente');
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-releases', (req, res) => {
    const { artista, titulo, precio, descripcion, fecha, imagen } = req.body;

    const sql = 'INSERT INTO lanzamientos (artista, titulo, precio, descripcion, fecha, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [artista, titulo, precio, descripcion, fecha, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar lanzamiento');
            return;
        }

        res.status(201).send('Lanzamiento agregado correctamente');
    });
});

// Obtiene todos los lanzamientos
app.get('/crud-releases', (req, res) => {
    const sql = 'SELECT * FROM lanzamientos';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener lanzamientos');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza un lanzamiento existente
app.put('/crud-releases/:id', (req, res) => {
    const { artista, titulo, precio, descripcion, fecha, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE lanzamientos SET artista = ?, titulo = ?, precio = ?, descripcion = ?, fecha = ?, imagen = ? WHERE id_lanzamiento = ?';
    connection.query(sql, [artista, titulo, precio, descripcion, fecha, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar lanzamiento');
            return;
        }

        res.status(200).send('Lanzamiento actualizado correctamente');
    });
});

// Elimina un lanzamiento
app.delete('/crud-releases/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM lanzamientos WHERE id_lanzamiento = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar lanzamiento');
            return;
        }

        res.status(200).send('Lanzamiento eliminado correctamente');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-news', (req, res) => {
    const { titulo, descripcion, imagen } = req.body;

    const sql = 'INSERT INTO noticias (titulo, descripcion, imagen) VALUES (?, ?, ?)';
    connection.query(sql, [titulo, descripcion, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar noticia');
            return;
        }

        res.status(201).send('Noticia agregada correctamente');
    });
});

// Obtiene todas las noticias
app.get('/crud-news', (req, res) => {
    const sql = 'SELECT * FROM noticias';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener noticias');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza una noticias existente
app.put('/crud-news/:id', (req, res) => {
    const { titulo, descripcion, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE noticias SET titulo = ?, descripcion = ?, imagen = ? WHERE id_noticia = ?';
    connection.query(sql, [titulo, descripcion, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar noticia');
            return;
        }

        res.status(200).send('Noticia actualizada correctamente');
    });
});

// Elimina una noticia
app.delete('/crud-news/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM noticias WHERE id_noticia = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar noticia');
            return;
        }

        res.status(200).send('Noticia eliminada correctamente');
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-tickets', (req, res) => {
    const { artista, precio, asiento, fecha_evento, tipo_boleto} = req.body;

    const sql = 'INSERT INTO boletos (artista, precio, asiento, fecha_evento, tipo_boleto) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [artista, precio, asiento, fecha_evento, tipo_boleto], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar boleto');
            return;
        }

        res.status(201).send('Boleto agregado correctamente');
    });
});

// Obtiene todos los boletos
app.get('/crud-tickets', (req, res) => {
    const sql = 'SELECT * FROM boletos';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener boletos');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza un boleto existente
app.put('/crud-tickets/:id', (req, res) => {
    const { artista, precio, asiento, fecha_evento, tipo_boleto} = req.body;
    const id = req.params.id;

    const sql = 'UPDATE boletos SET artista = ?, precio = ?, asiento = ?, fecha_evento = ?, tipo_boleto = ? WHERE id_boleto = ?';
    connection.query(sql, [artista, precio, asiento, fecha_evento, tipo_boleto, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar boleto');
            return;
        }

        res.status(200).send('Boleto actualizado correctamente');
    });
});

// Elimina un boleto
app.delete('/crud-tickets/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM boletos WHERE id_boleto = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar boleto');
            return;
        }

        res.status(200).send('Boleto eliminado correctamente');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/crud-store', (req, res) => {
    const { artista, titulo, descripcion, precio, imagen } = req.body;

    const sql = 'INSERT INTO tienda (artista, titulo, descripcion, precio, imagen) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [artista, titulo, descripcion, precio, imagen], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al agregar producto');
            return;
        }

        res.status(201).send('Producto agregado correctamente');
    });
});

// Obtiene todos los productos
app.get('/crud-store', (req, res) => {
    const sql = 'SELECT * FROM tienda';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al obtener productos');
            return;
        }

        console.log('Resultados de la consulta:', results);
        res.json(results);
    });
});

// Actualiza un producto existente
app.put('/crud-store/:id', (req, res) => {
    const { artista, titulo, descripcion, precio, imagen } = req.body;
    const id = req.params.id;

    const sql = 'UPDATE tienda SET artista = ?, titulo = ?, descripcion = ?, precio = ?, imagen = ? WHERE id_tienda = ?';
    connection.query(sql, [artista, titulo, descripcion, precio, imagen, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al actualizar producto');
            return;
        }

        res.status(200).send('Producto actualizado correctamente');
    });
});

// Elimina un producto
app.delete('/crud-store/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM tienda WHERE id_tienda = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor al eliminar producto');
            return;
        }

        res.status(200).send('Producto eliminado correctamente');
    });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en el puerto ${PORT}`);
});