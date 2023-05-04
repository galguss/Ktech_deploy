const db = require('./db');

exports.getContent = async () => {
    let sql = `SELECT * FROM home;`;
    const [data, _] = await db.execute(sql);
    return data[0];
}

exports.updateContent = (newContent) => {
    let sql =`UPDATE home SET content = '${newContent}' WHERE id_home = 1;`;
    return db.execute(sql);
}