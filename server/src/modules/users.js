const db = require('./db');

exports.getAllUsers =  () => {
    let sql = 'SELECT * FROM users;';
    return db.execute(sql);
};

exports.createUser = (email, password, github, fullname, level) => {
    let sql = `INSERT INTO users (email, password, github, full_name, level) VALUE (
        '${email}',
        '${password}',
        '${github}',
        '${fullname}',
        '${level}'
    )`;
    return db.execute(sql);
};

exports.updateUser = async (column, oddValue ,newValue) => {
    let sql_id = `SELECT * FROM users WHERE ${column} = '${oddValue}';`;
    let [id, _] = await db.execute(sql_id);
    id = id[0].user_id;

    let sql = `UPDATE users SET ${column} = '${newValue}' WHERE user_id = '${id}';`;
    return db.execute(sql);
}

exports.updatePasUser = (userID ,newValue) => {
    let sql = `UPDATE users SET password = '${newValue}' WHERE user_id = '${userID}';`;
    return db.execute(sql);
}
exports.saveImage = (image, id) => {
    const sql_page = `UPDATE users SET image = '${image}' WHERE user_id = ${id}`;
    return db.execute(sql_page);
}

exports.updateFavLangUser = (userID ,newValue) => {
    let sql = `UPDATE users SET favorite_languages = '${newValue}' WHERE user_id = '${userID}';`;
    return db.execute(sql);
}

exports.updateHobbiesUser = (userID ,newValue) => {
    let sql = `UPDATE users SET hobbies = '${newValue}' WHERE user_id = '${userID}';`;
    return db.execute(sql);
}

exports.deleteUser = (id) => {
    let sql = `DELETE FROM users WHERE user_id = ${id};`;
    return db.execute(sql);
}

exports.login =(email) => {
    let sql = `SELECT * FROM users WHERE email = '${email}';`;
    return db.execute(sql);
}

exports.getUserName = async () => {
    let sql = `SELECT user_id, email FROM users;`;
    let [userNames, _] = await db.execute(sql);
    const userName = [];

    for(let user of userNames){
        userName[user.user_id] = user.email;
    };

    return userName;
}


