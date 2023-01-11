const db = require('./db');

exports.getAllSubject = async () => {
    let sql = 'SELECT * FROM subjects;';

    let [allSubjects, _] = await db.execute(sql);
    const subsects = [];

    for(let sub of allSubjects){
        subsects[sub.subject_id] = sub.subject;
    }
   
    return subsects;
}

exports.getAllSubjectsObject = async () => {
    let sql = 'SELECT * FROM subjects;';
     return db.execute(sql);      
}

exports.getSubject = (subject) => {
    let sql = `SELECT * FROM subjects WHERE = '${subject}'`;
    return db.execute(sql);
}

exports.createSubject = (subject) => {
    let sql = `INSERT INTO subjects(subject) VALUE('${subject}');`;
    return db.execute(sql);
}

exports.updateSubject = (newSubject, id) => {
    let sql =`UPDATE subjects SET subject = '${newSubject}' WHERE subject_id = '${id}';`;
    return db.execute(sql);
}

exports.deleteSubject = (id) => {
    let sql = `DELETE FROM subjects WHERE subject_id = '${id}';`;
    return db.execute(sql);
}