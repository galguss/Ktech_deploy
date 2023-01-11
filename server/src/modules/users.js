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

exports.deleteUser = (id) => {
    let sql = `DELETE FROM users WHERE user_id = ${id};`;
    return db.execute(sql);
}

exports.login =(email) => {
    let sql = `SELECT user_id, email, password, level FROM users WHERE email = '${email}';`;
    return db.execute(sql);
}

exports.getUserName = async () => {
    let sql = `SELECT user_id, full_name FROM users;`;
    let [userNames, _] = await db.execute(sql);
    const userName = [];

    for(let user of userNames){
        userName[user.user_id] = user.full_name;
    };

    return userName;
}


