const db = require('../services/db');

function insert(name, modelNumber, price) {
    let sql = `INSERT INTO car (name, modelNumber, price) VALUES ("${name}", "${modelNumber}", "${price}")`;
    return new Promise(function (resolve, reject) {
        db.query(sql, function (err, result) {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

function getAll() {
    let sql = 'SELECT * FROM car';
    return new Promise(function (resolve, reject) {
        db.query(sql, function (err, result) {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

module.exports = {
    getAll,
    insert
}