const express = require('express');
const router = express.Router();
const EscanerFacial = require('../models/EscanerFacial');

// Ruta para agregar un resultado del escáner facial
router.post('/', async (req, res) => {
    try {
        const escaner = await EscanerFacial.create(req.body);
        res.status(201).json(escaner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todos los resultados de un usuario
router.get('/:usuario_id', async (req, res) => {
    try {
        const escaneres = await EscanerFacial.findAll({ where: { usuario_id: req.params.usuario_id } });
        res.json(escaneres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;