// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const achieveController = require('../controllers/achieve-controller');

// GET
router.get('/all', achieveController.getAllAchieves); // All Achievements
router.get('/:id', achieveController.getAchieveByID); // One Achievement By ID

// POST 
router.post('/add', achieveController.addAchieve);

// PUT 
router.put('/edit/:id', achieveController.editAchieve);

// DELETE
router.delete('/delete/:id', achieveController.deleteAchieve);

module.exports = router;