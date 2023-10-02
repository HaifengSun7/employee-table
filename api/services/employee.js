const db = require('./db');
const helper = require('../helper');

async function getEmployees() {
    const sql = `SELECT id, first_name, last_name, salary, job_title FROM employee`;
    const rows = await db.query(sql);
    const employees = helper.rowsOrEmptyList(rows);
    return {
        employees
    };
}

async function addEmployee(employee) {
    const sql = `INSERT INTO employee (first_name, last_name, salary, job_title) VALUES (?, ?, ?, ?)`;
    const res = await db.query(sql, [employee.firstName, employee.lastName, employee.salary, employee.jobTitle]);
    const msg = helper.msgUpdatedOrError(res.affectedRows);
    return {
        msg
    };
}

async function deleteEmployee(id) {
    const sql = `DELETE FROM employee WHERE id=?`;
    const res = await db.query(sql, [id]);
    const msg = helper.msgUpdatedOrError(res.affectedRows);
    return {
        msg
    };
}

async function editEmployee(id, employee) {
    const sql = `UPDATE employee SET first_name=?, last_name=?, salary=?, job_title=? WHERE id=?`;
    const res = await db.query(sql, [employee.firstName, employee.lastName, employee.salary, employee.jobTitle, id]);
    const msg = helper.msgUpdatedOrError(res.affectedRows);
    return {
        msg
    };
}

module.exports = {
    getEmployees,
    addEmployee,
    deleteEmployee,
    editEmployee
}