const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./usuario');

const EscanerFacial = sequelize.define('EscanerFacial', {
    porcentaje_fumador: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

EscanerFacial.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = EscanerFacial;