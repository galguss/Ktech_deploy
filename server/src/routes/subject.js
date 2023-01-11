const express = require('express');
const router = express.Router();

const subjectDB = require('../modules/subjects');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', async (req, res) => {
    let [subjects, _] = await subjectDB.getAllSubjectsObject();
    res.status(200).json(subjects);
});

router.post('/', checkAdmin, async (req, res) => {
    try {
        const { subject } = req.body;
        await subjectDB.createSubject(subject);

        res.status(200).json({
            message: "subject created!"
        });
    } catch (error) {
        res.status(401).json({
            message: "Created subject failed"
        });
    }
});

router.patch('/', checkAdmin, async (req, res) => {
    try {
        const { subjectId, newValue } = req.body;
        await subjectDB.updateSubject(newValue, subjectId);

        res.status(200).json({
            message: "subject Updated!"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Updated subject failed"
        });
    }
});

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { subjectId } = req.body;
        await subjectDB.deleteSubject(subjectId);

        res.status(200).json({
            message: "subject deleted!"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Deleted subject failed"
        });
    }
});


module.exports = router;