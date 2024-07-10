const express = require('express');
const router = express.Router();
const Diario = require('../models/Diario');

// Ruta para agregar una entrada en el diario
router.post('/', async (req, res) => {
    try {
        const diario = await Diario.create(req.body);
        res.status(201).json(diario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todas las entradas de un usuario
router.get('/:usuario_id', async (req, res) => {
    try {
        const diarios = await Diario.findAll({ where: { usuario_id: req.params.usuario_id } });
        res.json(diarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;