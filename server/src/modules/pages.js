const db = require('./db');

exports.getAllPage = async () => {
    let sql = 'SELECT * FROM pages;';
    let [allPage, _] = await db.execute(sql);

    const pages = [];

    for(let page of allPage){
        pages[page.page_id] = page.page;
    }

    return pages;
}

exports.getPage = (page) => {
    let sql = `SELECT * FROM pages WHERE = '${page}'`;
    return db.execute(sql);
}

exports.createPage = (page) => {
    let sql = `INSERT INTO pages(page) VALUE('${page}');`;
    return db.execute(sql);
}

exports.updatePage = async (newpage, id) => {
    let sql =`UPDATE pages SET page = '${newpage}' WHERE page_id = '${id}';`;
    return db.execute(sql);
}

exports.deletePage = (id) => {
    let sql = `DELETE FROM pages WHERE page_id = '${id}';`;
    return db.execute(sql);
}