const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./usuario');

const Publicacion = sequelize.define('Publicacion', {
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Publicacion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Publicacion;