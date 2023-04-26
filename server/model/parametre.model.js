const Parametre = require('../schema/parametre.schema');
const client = require('../common/dao');
const { ObjectId } = require('bson');

client.connecter(process.env.URL);

const addParametre = async (req, res) => {
	try
	{
		let parametre = new Parametre({
			language: req.body.language,
			lightMode : req.body.lightMode,
		});
    
		let cursor = await client
            .db()
			.collection("parametre")
			.insertOne(parametre);
			
		res.status(200).json(cursor);
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const getParametre = async (req, res) => {
	try
	{
        let cursor = client
            .db()
            .collection('parametre')
            .find();

        let result = await cursor.toArray();
        if (result.length > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(204).json({msg : 'Aucun parametre trouvé.'});
        }
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const editParametre = async (req, res) => {
    try
    {
        let id = new ObjectId(req.query.id);

		let lLanguage = req.body.language;
		let lLightMode = req.body.lightMode;

        if (!lLanguage || !lLightMode) {
            res.status(400).json({msg : "Les champs language et lightMode sont obligatoires"});
            return;
        }
        
        let cursor = client
            .db()
            .collection('parametre')
            .updateOne(
                {_id : id},
                {
                    $set : 
					{
                        language : lLanguage,
						lightMode: lLightMode
                    }
                }
            );
        
        if (cursor.modifiedCount !== 1)
        {
            res.status(200).json({msg : "Modification des parametres réussie"});
        } 
        else
        {
            res.status(404).json({msg : "Erreur modification parametre"});
        }
    } 
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteParametre = async (req, res) => {
    try 
    {
        let id = Number(req.query.id);

        let cursor = client
            .db()
            .collection('parametre')
            .deleteMany();

            if (cursor.deletedCount != 1)
            {
                res.status(200).json({msg : "Suppression des parametres réussie"});
            }
            else
            {
                res.status(404).json({msg : "Il n'y a pas de parametre"});
            }
    }
    catch (error) 
    {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {addParametre, getParametre, editParametre, deleteParametre};