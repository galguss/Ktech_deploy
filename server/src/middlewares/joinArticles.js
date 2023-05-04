const article = require('../modules/articles');
const users = require('../modules/users');
const subjects = require('../modules/subjects');
const professions = require('../modules/professions');
const pages = require('../modules/pages');


async function joinArticles(req, res, next){
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
             key.CS_File = page[key.CS_File];
        }

        req.articles = articles;
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = joinArticles;