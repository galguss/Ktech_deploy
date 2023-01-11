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

exports.deleteArticle = (id) => {
    let sql = `DELETE FROM articles WHERE article_id = '${id}';`;
    return db.execute(sql);
}

