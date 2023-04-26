const Utilisateur = require('../schema/utilisateur.schema');
const client = require('../common/dao');
const { ObjectId } = require('bson');

client.connecter(process.env.URL);

const addUtilisateur = async (req, res) => {
	try
	{
		let utilisateur = new Utilisateur({
			prenom: req.body.prenom,
			email : req.body.email
		});
    
		let cursor = await client
            .db()
			.collection("utilisateur")
			.insertOne(utilisateur);
			
		res.status(200).json(cursor);
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const getUtilisateur = async (req, res) => {
	try
	{
        let cursor = client
            .db()
            .collection('utilisateur')
            .find();

        let result = await cursor.toArray();
        if (result.length > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(204).json({msg : 'Aucune employe trouvé.'});
        }
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const editUtilisateur = async (req, res) => {
    try {
        let id = new ObjectId(req.query.id);

        let pPrenom = req.body.prenom;
        let eEmail = req.body.email;

        if (!pPrenom || !eEmail) {
            res.status(400).json({msg : "Les champs prenom et email sont obligatoires"});
            return;
        }
        
        let cursor = await client
            .db()
            .collection('utilisateur')
            .updateOne(
                {_id : id},
                {
                    $set : 
                    {
                        prenom : pPrenom,
                        email: eEmail
                    }
                }
            );
        
        if (cursor.modifiedCount === 1) {
            res.status(200).json({msg : "Modification de l'utilisateur réussie"});
        } 
        else {
            res.status(404).json({msg : "Erreur modification utilisateur"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteUtilisateur = async (req, res) => {
    try 
    {
        let cursor = client
            .db()
            .collection('utilisateur')
            .deleteMany();

            if (cursor.deletedCount != 1)
            {
                res.status(200).json({msg : "Suppression de l'utilisateur réussie"});
            }
            else
            {
                res.status(404).json({msg : "Il n'y a pas d'utilisateur"});
            }
    }
    catch (error) 
    {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {addUtilisateur, getUtilisateur, editUtilisateur, deleteUtilisateur};