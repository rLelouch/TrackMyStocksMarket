/** Liste des dependences pour l'api */
// npm install express
// npm install mongodb
// npm install body-parser
// npm install mongoose
// npm i -S cors
// npm install bson

'use strict';

// acces au variable globale de .env
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'common/config/.env') });

const express = require('express');
const cors = require('cors');
const {connecter} = require('./common/dao');
const routes = require('./router/routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", routes);

app.get('/', (req, res, next) => {
    res.send("Votre requete a bien été reçue ! ");
    next();
});

app.get('/api', (req, res, next) => {
    res.send("Votre requete a bien été reçue ! ");
    next();
});

// port que l'on va utiliser
const port = process.env.PORT;

// connexion a la bdd mongo
connecter("mongodb://127.0.0.1:27017/", (status) => {
    
    if (status == 1)
    {
        // mise en place du serveur si connexion à la bdd reussi
        console.log('Connexion à la base de donnnées établie');
        app.listen(port, () => console.log('Attente des requets au port ' + port + ' ...'));
    }
    else
    {
        console.log('Error 404');
        process.exit(-1);
    }
});