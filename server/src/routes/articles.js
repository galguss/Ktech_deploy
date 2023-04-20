const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAuth');


const article = require('../modules/articles');
const users = require('../modules/users');
const subjects = require('../modules/subjects');
const professions = require('../modules/professions');
const pages = require('../modules/pages');

router.get('/', async (req, res) => {
    try {
       let user = await users.getUserName();
       let subject = await subjects.getAllSubject();
       let profession = await professions.getAllProfession();
       let articles = await article.getAllArticles();
       let page = await pages.getAllPage(); 

       for(let key of articles){
            key.subject_id = subject[key.subject_id];
            key.profession_id = profession[key.profession_id];
            key.page_id = page[key.page_id];
            key.the_solver = user[key.the_solver];
            key.file_to_solve = page[key.file_to_solve];
            key.the_tester = user[key.the_tester];
       }

       res.status(200).json(articles);

    } catch (error) {
        res.status(401).json({
            message: `${error}`
        });
    }
});

router.post('/', checkAdmin, upload.single('page'), async (req, res) => {
    try {
        const { filename: page } = req.file;
        const { subjectValue, professionValue, season_and_Question_numner, level} = req.body;

        let subject = await subjects.getAllSubject();
        let subjectId;
        for(let k = 0; k < subject.length; k++){
            if(subject[k] === subjectValue){
                subjectId = k;
                break;
            }
        }

        let profession = await professions.getAllProfession();
        let professionId;
        for(let k = 0; k < profession.length; k++){
            if(profession[k] === professionValue){
                professionId = k;
                break;
            }
        }

        const pathFile = `/uploads/${page}`;
        await article.createArticle(pathFile, subjectId, professionId, season_and_Question_numner, level);

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
        const { id, column, newValue } = req.body;
            await article.updateArticle(id, column, newValue);
        
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
        const { id, user_id, userLevel } = req.body;
        
         if(type === 'solution'){
            const { filename: page } = req.file;
            const pathFile = `/uploads/${page}`;
            console.log('solution');
            await article.updateSolutionArticle(id, pathFile, user_id);
        }else if(type === 'test'){
            if(userLevel !== 'A'){
                await article.updateTestArticle(id);
                await article.updateTesterArticle(id, user_id);
            }else{
                await article.updatePublicationArticle(id);
            }
        }
           
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