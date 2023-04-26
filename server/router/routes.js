// on initialise le serveur
const http = require('http');
const httpServer = http.createServer();

// pour les requestes http (httprequest)
const allowOrigins = [`http://localhost:${process.env.PORT}/`, `http://localhost:${process.env.PORT}/api/utilisateur`, `http://localhost:${process.env.PORT}/api/parametre`, `http://localhost:${process.env.PORT}/api/action`];
httpServer.on('request', (request, response) => {

    // On test si l'entête "Origin" fait partie des origines acceptées
    if (request.headers['origin'] && allowOrigins.includes(request.headers['origin']))
    {

        // Si oui alors on renseigne "Access-Control-Allow-Origin" avec l'origine de la requête
        response.setHeader('Access-Control-Allow-Origin', request.headers['origin']);
    } 
    else
    {

        // Sinon on renseigne "Access-Control-Allow-Origin" à null créant une erreur CORS dans le navigateur
        response.setHeader('Access-Control-Allow-Origin', 'null');
    }

    if (request.method === 'OPTIONS')
    {
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

        return response.end();
    }

    // suite du traitement ...
});


const express = require('express');
const {
    addUtilisateur,
    getUtilisateur,
    editUtilisateur,
    deleteUtilisateur
} = require('../model/utilisateur.model');

const {
    addParametre,
    getParametre,
    editParametre,
    deleteParametre
} = require('../model/parametre.model');

const {
    addAction,
    getAction,
    editAction,
    deleteAction
} = require('../model/action.model');

const router = express.Router();

// create
router.route("/utilisateur").post(addUtilisateur);
router.route("/parametre").post(addParametre);
router.route("/action").post(addAction);

// read
router.route("/utilisateur").get(getUtilisateur);
router.route("/parametre").get(getParametre);
router.route("/action").get(getAction);

// update
router.route("/utilisateur").put(editUtilisateur);
router.route("/parametre").put(editParametre);
router.route("/action").put(editAction);

// delete
router.route("/utilisateur").delete(deleteUtilisateur);
router.route("/parametre").delete(deleteParametre);
router.route("/action").delete(deleteAction);


module.exports = router;