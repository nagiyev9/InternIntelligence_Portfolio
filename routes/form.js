// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const formController = require('../controllers/form-controller');

// POST
router.post('/add', formController.addNewForm); // If we write it under the '/:id' it shows error. Because it get the 'add' word like ID

// GET
router.get('/all', formController.getAllForms); // All Forms
router.get('/:id', formController.getFormByID); // One Form By ID

// DELETE: Delete Form
router.delete('/delete/:id', formController.deleteForm);

module.exports = router;
