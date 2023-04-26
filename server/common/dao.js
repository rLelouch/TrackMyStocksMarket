const { MongoClient, Db } = require("mongodb");

let client = null;

const connecter = (url, callback) => {
    if(client==null)
    {
        client = new MongoClient(url);

        client.connect(() => {
            client=null;
        });
    }

    if (callback !== undefined) callback(1);
};

const db = () => {
    return new Db(client, process.env.DBNAME);
};

const fermerConnection = () => {
    client.close();
    client = null;
};

module.exports = {connecter, db, fermerConnection};