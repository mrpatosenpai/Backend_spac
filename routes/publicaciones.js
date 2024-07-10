const express = require('express');
const router = express.Router();
const Publicacion = require('../models/Publicacion');

// Ruta para agregar una nueva publicación
router.post('/', async (req, res) => {
    try {
        const publicacion = await Publicacion.create(req.body);
        res.status(201).json(publicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todas las publicaciones
router.get('/', async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas las publicaciones de un usuario
router.get('/:usuario_id', async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({ where: { usuario_id: req.params.usuario_id } });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;