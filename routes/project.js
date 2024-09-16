// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const projectController = require('../controllers/project-controller');
const { upload } = require('../utils/image-upload');

// GET
router.get('/all', projectController.getAllProjects); // All Projects
router.get('/:id', projectController.getProjectByID); // One Project By ID

// POST 
router.post('/add', upload.single('image'), projectController.addProject);

// PUT 
router.put('/edit/:id', upload.single('image'), projectController.editProject);

// DELETE
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;