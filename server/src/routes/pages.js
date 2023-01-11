const express = require('express');
const router = express.Router();

const pageDB = require('../modules/pages');

router.get('/', async (req, res) => {
    let pages = await pageDB.getAllPage();

    res.status(200).json({
        message: pages
    });
});

/*router.post('/', async (req, res) => {
    try {
        const { page } = req.body;
        await pageDB.createPage(page);

        res.status(200).json({
            message: "page created!"
        });
    } catch (error) {
        console.log(error);
    }
});*/

router.patch('/', async (req, res) => {
    try {
        const { newpage, id } = req.body;
        await pageDB.updatePage(newpage, id);

        res.status(200).json({
            message: "page Updated!"
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', async (req, res) => {
    try {
        const { id } = req.body;
        await pageDB.deletePage(id);

        res.status(200).json({
            message: "page deleted!"
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;