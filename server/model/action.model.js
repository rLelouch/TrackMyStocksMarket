const Action = require('../schema/action.schema');
const client = require('../common/dao');
const { ObjectId } = require('bson');

client.connecter(process.env.URL);

const addAction = async (req, res) => {
	try
	{
		let user = new Action({
            _id: Number(req.body.id),
            airLiquide : {
                nbAction : req.body.nbActionAirLiquide,
                variationBaisse : req.body.variationBaisseAirLiquide,
                palierBaisse : req.body.palierBaisseAirLiquide,
            },
            orange : {
                nbAction : req.body.nbActionOrange,
                variationBaisse : req.body.variationBaisseOrange,
                palierBaisse : req.body.palierBaisseOrange,
            },
            eth : {
                nbAction : req.body.nbActionETH,
                variationBaisse : req.body.variationBaisseETH,
                palierBaisse : req.body.palierBaisseETH,
            }
		});
    
		let cursor = await client
            .db()
			.collection("action")
			.insertOne(user);
			
		res.status(200).json(cursor);
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const getAction = async (req, res) => {
	try
	{
        let cursor = client
            .db()
            .collection('action')
            .find();

        let result = await cursor.toArray();
        if (result.length > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(204).json({msg : 'Aucune action trouvé.'});
        }
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
}

const editAction = async (req, res) => {
    try
    {
        let id = new ObjectId(req.query.id);

            let nNbActionAirLiquide = req.body.nbActionAirLiquide;
            let vVariationBaisseAirLiquide = req.body.variationBaisseAirLiquide;
            let pPalierBaisseAirLiquide = req.body.palierBaisseAirLiquide;

            let nNbActionOrange = req.body.nbActionOrange;
            let vVariationBaisseOrange = req.body.variationBaisseOrange;
            let pPalierBaisseOrange = req.body.palierBaisseOrange;
            
            let nNbActionETH = req.body.nbActionETH;
            let vVariationBaisseETH = req.body.variationBaisseETH;
            let pPalierBaisseETH = req.body.palierBaisseETH;
        
        let cursor = client
            .db()
            .collection('action')
            .updateOne(
                {_id : id},
                {
                    $set : 
					{
                        airLiquide : {
                            nbAction : nNbActionAirLiquide,
                            variationBaisse : vVariationBaisseAirLiquide,
                            palierBaisse : pPalierBaisseAirLiquide,
                        },
                        orange : {
                            nbAction : nNbActionOrange,
                            variationBaisse : vVariationBaisseOrange,
                            palierBaisse : pPalierBaisseOrange,
                        },
                        eth : {
                            nbAction : nNbActionETH,
                            variationBaisse : vVariationBaisseETH,
                            palierBaisse : pPalierBaisseETH,
                        }
                    }
                }
            );
        
        if (cursor.modifiedCount !== 1)
        {
            res.status(200).json({msg : "Modification des actions a réussie"});
        } 
        else
        {
            res.status(404).json({msg : "Modification des actions a échouée"});
        }
    } 
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteAction = async (req, res) => {
    try 
    {
        // let id = Number(req.query.id);

        let cursor = client
            .db()
            .collection('action')
            .delete();

            if (cursor.deletedCount != 1)
            {
                res.status(200).json({msg : "Suppression des actions réussie"});
            }
            else
            {
                res.status(404).json({msg : "Il n'y a pas d'action"});
            }
    }
    catch (error) 
    {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {addAction, getAction, editAction, deleteAction};