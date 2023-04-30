const express = require('express');
const router = express.Router();

const checkAdmin = require('../middlewares/checkAdmin');
const contentDB = require('../modules/homePage_m');

router.get('/', async (req, res) => {
try {
    const content = await contentDB.getContent();
    res.status(200).json(content.content);
} catch (error) {
    res.status(401).json(error);
}
});

router.patch('/', checkAdmin, async (req, res) => {
    try {
        const { newValue } = req.body;
        await contentDB.updateContent(newValue);
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});

module.exports = router;