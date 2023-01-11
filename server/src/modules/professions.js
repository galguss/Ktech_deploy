const db = require('./db');

exports.getAllProfession = async () => {
    let sql = 'SELECT * FROM professions;';
    let [AllProfession , _] = await db.execute(sql);
    const professions = [];

    for(let prof of AllProfession){
        professions[prof.profession_id] = prof.profession;
    }

    return professions;
}

exports.getAllProfessionsObject = async () => {
    let sql = 'SELECT * FROM professions;';
    return db.execute(sql);   
}

exports.getProfession = (profession) => {
    let sql = `SELECT * FROM professions WHERE = '${profession}'`;
    return db.execute(sql);
}

exports.createProfession = (profession) => {
    let sql = `INSERT INTO professions(profession) VALUE('${profession}');`;
    return db.execute(sql);
}

exports.updateProfession = (newProfession ,id) => {
    let sql =`UPDATE professions SET profession = '${newProfession}' WHERE profession_id = '${id}';`;
    return db.execute(sql);
}

exports.deleteProfession = (professionId) => {
    let sql = `DELETE FROM professions WHERE profession_id = ${professionId};`;
    return db.execute(sql);
}