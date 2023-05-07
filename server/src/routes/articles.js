const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAuth');
const joinArticles = require('../middlewares/joinArticles');

const article = require('../modules/articles');

router.get('/', joinArticles ,async (req, res) => {
    try {
        const articles = req.articles;
        res.status(200).json(articles);
        
    } catch (error) {
        res.status(401).json({
            message: error
        });
    }
});

router.post('/', checkAdmin, upload.single('page'), async (req, res) => {
    try {
        const { filename: page } = req.file;
        const { subjectValue, professionValue, season_and_Question_numner, level} = req.body;
        const pathFile = `/uploads/${page}`;
        await article.createArticle(pathFile, subjectValue, professionValue, season_and_Question_numner, level);

        res.status(200).json({
            message: "article created!"
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'created article is failed!'
        });
    }
});

router.patch('/', checkAuth, async (req, res) => {
    try {
        const { id ,subjectValue, professionValue, season_and_Question_numner} = req.body;
        await article.updateArticle(id ,subjectValue, professionValue, season_and_Question_numner);
        
        res.status(200).json({
            message: "article updated!"
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'updated article is failed!'
        });
    }
});

router.patch('/:type', checkAuth, upload.single('page'), async (req, res) => {
    try {
        const type = req.params.type;
        const { id, user_id, userLevel, Links} = req.body;
         if(type === 'solution'){
            const { filename: page } = req.file;
            const pathFile = `/uploads/${page}`;
            await article.updateSolutionArticle(id, pathFile, user_id, Links);
        }else if(type === 'test'){
            await article.updateTesterArticle(id, user_id);
        }else if(type === 'public')
            if(userLevel === 'A')
            await article.updatePublicationArticle(id);
           
    } catch (error) {
        console.log(error);
    }

})

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { id } = req.body;
        await article.deleteArticle(id);

        res.status(200).json({
            message: "article deleted!"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'deleted article is failed!'
        });
    }
})




module.exports = router;