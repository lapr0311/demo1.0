const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'allegory',
    password: '1207',
    port: 5432, // Puerto de PostgreSQL, generalmente es 5432
});

app.set('view engine', 'ejs'); // Motor de vistas EJS
app.use(express.urlencoded({ extended: false })); // Middleware para parsear el body
app.use(cookieParser());
// Define las rutas de tu aplicación aquí
// ...

// Función para encriptar la contraseña
async function encriptarContrasena(contrasena) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(contrasena, saltRounds);
    return hash;
}

// Ruta para el inicio de sesión
app.get('/login', (req, res) => {
    res.render('login'); // Renderiza la vista de inicio de sesión (login.ejs)
});

app.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;
    const query = 'SELECT * FROM usuarios WHERE nombre = $1';
    const result = await pool.query(query, [usuario]);

    if (result.rows.length === 1) {
        const usuarioDB = result.rows[0];
        const contrasenaValida = await bcrypt.compare(contrasena, usuarioDB.contrasena);

        if (contrasenaValida) {
            res.cookie('usuario', usuarioDB.nombre);
            res.redirect(usuarioDB.es_admin ? '/admin' : '/usuario');
        } else {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
});

// Ruta para la página de usuario
app.get('/usuario', (req, res) => {
    const usuario = req.cookies.usuario;
    res.render('usuario', { usuario }); // Renderiza la vista de usuario (usuario.ejs) y pasa el nombre del usuario
});

// Ruta para la página de administrador
app.get('/admin', (req, res) => {
    const usuario = req.cookies.usuario;
    res.render('admin', { usuario }); // Renderiza la vista de administrador (admin.ejs) y pasa el nombre del usuario
});

// Ruta para el cierre de sesión
app.get('/logout', (req, res) => {
    res.clearCookie('usuario');
    res.redirect('/login');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});