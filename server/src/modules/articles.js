const db = require('../modules/db');

exports.getAllArticles = async () => {
    const sql = 'SELECT * FROM articles;';
    let [articles, _] = await db.execute(sql);
    return articles;
}

exports.createArticle = async (page, subject, profession, season_and_Question_numner, level) => {

    const [result, _] = await db.execute('INSERT INTO pages (page) VALUES (?)', [page]);
    const [subject_id, s]= await db.execute('SELECT subject_id FROM subjects WHERE subject = ?', [subject]);
    const [profession_id, p] = await db.execute('SELECT profession_id FROM professions WHERE profession = ?', [profession]);
    
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    const todaysDate = `${dd}/${mm}/${yyyy}`;

    const sql = `INSERT INTO articles ( 
    subject_id, 
    profession_id, 
    page_id, 
    season_and_Question_numner, 
    level,  
    there_is_a_solution, 
    inspection_confirmaction, 
    Approval_for_publication, 
    Date_of_writing_solution
    ) 
    VALUE (
    ?,
    ?,
    ?,
    ?,
    ?,
    'false',
    'false',
    'false',
    ?
    )`;
    const [articleResult, __] = await db.execute(sql, [
    subject_id[0].subject_id,
    profession_id[0].profession_id,
    result.insertId,
    season_and_Question_numner,
    level,
    todaysDate,
    ]);
}

exports.updateArticle = async (id ,subjectValue, professionValue, season_and_Question_numner,) => {
    const [subject_id, s]= await db.execute('SELECT subject_id FROM subjects WHERE subject = ?', [subjectValue]);
    const [profession_id, p] = await db.execute('SELECT profession_id FROM professions WHERE profession = ?', [professionValue]);
    
    let sql = `UPDATE articles SET 
               subject_id = '${subject_id[0].subject_id}',
               profession_id ='${profession_id[0].profession_id}',
               season_and_Question_numner = '${season_and_Question_numner}' 
               WHERE article_id = '${id}';`;
    return db.execute(sql);
}

exports.updateSolutionArticle = async (id, page, user_id, links) => {
    const isCSharpFile = /\.(cs)$/i.test(page.toString());
    const [result, _] = await db.execute('INSERT INTO pages (page) VALUES (?)', [page]);
    const sql_pageID = result.insertId;
    
    let sql;
    if(isCSharpFile){
       return db.execute(`UPDATE articles SET CS_File = '${sql_pageID}' WHERE article_id = '${id}';`);
    }else{
        sql = `UPDATE articles SET 
        there_is_a_solution = 'true',
        file_to_solve = '${sql_pageID}',
        the_solver = '${user_id}'`
        if(typeof links !== 'undefined'){
            sql += `, links = '${links}'`
        }
       sql += `WHERE article_id = '${id}';`;
    }
      
    return db.execute(sql);
}

exports.updateTesterArticle = (id, user_id) => {
    let sqlUser = `UPDATE articles SET 
                   the_tester = '${user_id}',  
                   inspection_confirmaction = 'true'
                   WHERE article_id = '${id}';`;
    return db.execute(sqlUser);
}

exports.updatePublicationArticle = (id) => {
    let sql = `UPDATE articles SET Approval_for_publication = 'true' WHERE article_id = '${id}';`;
    return db.execute(sql);
    
}

exports.deleteArticle = (id) => {
    let sql = `DELETE FROM articles WHERE article_id = '${id}';`;
    return db.execute(sql);
}

