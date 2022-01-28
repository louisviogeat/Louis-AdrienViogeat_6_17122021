// créer un fichier .env qui contient les infos de la base de données et le token

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');


mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !', e));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);


module.exports = app;