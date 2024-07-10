const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const usuariosRouter = require('./routes/usuarios');
const diariosRouter = require('./routes/diarios');
const escanerFacialRouter = require('./routes/escanerFacial');
const publicacionesRouter = require('./routes/publicaciones');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/usuarios', usuariosRouter);
app.use('/diarios', diariosRouter);
app.use('/escanerFacial', escanerFacialRouter);
app.use('/publicaciones', publicacionesRouter);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
    });
});

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://<tu-servidor>:3000',
});

export const registerUser = async (user) => {
    try {
        const response = await api.post('/usuarios/register', user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addDiaryEntry = async (entry) => {
    try {
        const response = await api.post('/diarios', entry);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addScannerResult = async (result) => {
    try {
        const response = await api.post('/escanerFacial', result);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await api.post('/publicaciones', post);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPosts = async () => {
    try {
        const response = await api.get('/publicaciones');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserPosts = async (userId) => {
    try {
        const response = await api.get(`/publicaciones/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};