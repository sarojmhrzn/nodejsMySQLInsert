const db = require('../services/db');
const config = require("../config");

async function insert(name, modelNumber, price) {
    let message = 'Error in inserting car';
    const sql = `INSERT INTO car (name, modelNumber, price) VALUES ("${name}", "${modelNumber}", "${price}")`;
    const result = await db.promise().query(sql);
    if(result.affectedRows) {
        message = 'Car inserted sucessfully!'
    }
    return message;
}

async function getAll(page=1) {
    const offset = getOffset(page, config.listPerPage);
    const rows = await db.promise().query(
        'SELECT * FROM car LIMIT ?,?',
        [offset, config.listPerPage]
    );
    const data = emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

module.exports = {
}

module.exports = {
    getAll,
    insert
}