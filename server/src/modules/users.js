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

exports.updateUser = (id, column ,newValue, password, image, favorite, hobbies, github) => {
    let sql = '';
    if(typeof column !== 'undefined'){
        if(column === 'password'){
            sql = `UPDATE users SET password = '${password}' WHERE user_id = '${id}';`;
        }else{
            sql = `UPDATE users SET ${column} = '${newValue}' WHERE user_id = '${id}';`;
        }
        return db.execute(sql);
    }
    
    sql = 'UPDATE users SET ';
    if(password !== false)
    sql += `password = '${password}', `;
    if(typeof image !== 'undefined')
    sql += `image = '${image}', `;
    if(typeof favorite !== 'undefined')
    sql += `favorite_languages = '${favorite}', `;
    if(typeof hobbies !== 'undefined')
    sql += `hobbies = '${hobbies}', `;
    if(typeof github !== 'undefined')
    sql += `github = '${github}', `;
    sql = sql.slice(0, -2); // Remove the last comma and space
    sql +=`WHERE user_id = '${id}';`;
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
    let sql = `SELECT user_id, full_name FROM users;`;
    let [userNames, _] = await db.execute(sql);
    const userName = [];

    for(let user of userNames){
        userName[user.user_id] = user.full_name;
    };

    return userName;
}

exports.getUserdata = async (id) => {
    let sql = `SELECT * FROM users WHERE user_id = '${id}';`;
    let [userNames, _] = await db.execute(sql);
    return userNames[0];
}


