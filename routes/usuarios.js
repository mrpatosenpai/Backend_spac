const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/register', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;