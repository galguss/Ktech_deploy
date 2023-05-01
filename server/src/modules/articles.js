const db = require('../modules/db');

exports.getAllArticles = async () => {
    const sql = 'SELECT * FROM articles;';
    let [articles, _] = await db.execute(sql);
    return articles;
}

exports.createArticle = async (page, subject_id, profession_id, season_and_Question_numner, level) => {

    const sql_page = `INSERT INTO pages (page) VALUE ('${page}')`;
    await db.execute(sql_page);

    let sql_pageId = `SELECT page_id FROM pages WHERE page = '${page}';`;
    let [pageId, _] = await db.execute(sql_pageId);
    pageId = pageId[0].page_id;
    
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    const todaysDate = `${dd}/${mm}/${yyyy}`;

    let sql = `INSERT INTO articles ( 
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
          ${subject_id},
          ${profession_id},
          ${pageId},
         '${season_and_Question_numner}',
         '${level}',
          'false',
          'false',
          'false',
          '${todaysDate}'
         )`;

         return db.execute(sql);
}

exports.updateArticle = async (id, column, newValue) => {
    let sql = `UPDATE articles SET ${column} = '${newValue}' WHERE article_id = '${id}';`;
    return db.execute(sql);
}

exports.updateSolutionArticle = async (id, page, user_id, links) => {
    const isCSharpFile = /\.(cs)$/i.test(page.toString());
    const [result, _] = await db.execute('INSERT INTO pages (page) VALUES (?)', [`${page}`]);
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

exports.updateTestArticle = (id) => {
    let sql = `UPDATE articles SET inspection_confirmaction = 'true' WHERE article_id = '${id}';`;
    return db.execute(sql);
    
}

exports.updateTesterArticle = (id, user_id) => {
    let sqlUser = `UPDATE articles SET the_tester = '${user_id}' WHERE article_id = '${id}';`;
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

