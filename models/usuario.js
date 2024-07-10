const {DataTypes} = require('sequelize');

const sequelize = require('../db');

const Usuario = sequelize.define('Usuario', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Usuario;