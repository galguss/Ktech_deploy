const express = require('express');
const router = express.Router();

const professionDB = require('../modules/professions');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', async (req, res) => {
   let [profession, _] = await professionDB.getAllProfessionsObject();
    res.status(200).json(profession);
});

router.post('/', checkAdmin, async (req, res) => {
    try {
        const { profession } = req.body;
        await professionDB.createProfession(profession);

        res.status(200).json({
            message: "profession created!"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Created profession failed"
        });
    }
});

router.patch('/', checkAdmin, async (req, res) => {
    try {
        const { ProfessionId,  newValue} = req.body;
        await professionDB.updateProfession(newValue, ProfessionId);

        res.status(200).json({
            message: "profession Updated!"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Updated profession failed"
        });
    }
});

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { id } = req.body;
        await professionDB.deleteProfession(id);

        res.status(200).json({
            message: "profession deleted!"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Deleted profession failed"
        });
    }
});


module.exports = router;