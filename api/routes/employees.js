var express = require('express');
var router = express.Router();
var employee = require('../services/employee');

/* GET employees: list all employees */
router.get('/', async function(req, res, next) {
    try {
        res.json(await employee.getEmployees());
    } catch (err) {
        console.error('Error in fetching employee info', err.message);
        next(err);
    }
});

/* POST employees: add a new employee */
router.post('/', async function(req, res, next) {
    try {
        res.json(await employee.addEmployee(req.body));
    } catch (err) {
        console.error('Error in adding a new employee:', err.message);
        next(err);
    }
});

/* DELETE employees: delete an employee */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await employee.deleteEmployee(req.params.id));
    } catch (err) {
        console.error('Error in deleting an employee:', err.message);
        next(err);
    }
});

/* PUT employees: edit an existing employee */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await employee.editEmployee(req.params.id, req.body));
    } catch (err) {
        console.error('Error in editing an employee:', err.message);
        next(err);
    }
});

module.exports = router;