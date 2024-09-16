// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const skillController = require('../controllers/skill-controller');

// GET
router.get('/all', skillController.getAllSkills); // All Skills
router.get('/:id', skillController.getSkillByID); // One Skill By ID

// POST 
router.post('/add', skillController.addSkill);

// PUT 
router.put('/edit/:id', skillController.editSkill);

// DELETE
router.delete('/delete/:id', skillController.deleteSkill);

module.exports = router;