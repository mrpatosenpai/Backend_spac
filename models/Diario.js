const {DataTypes}= require('sequelize');
const sequelize = require('../db');
const Usuario = require('./usuario');

const Diario = sequelize.define('Diario', {
    entrada:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Diario.belongsTo(Usuario,{foreignKey:'usuario_id'});

module.exports = Diario;