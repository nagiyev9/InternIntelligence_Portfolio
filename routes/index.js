// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const skillRouter = require('./skill');
const achievementRouter = require('./achieve');
const projectRouter = require('./project');
const formRouter = require('./form');
const authRouter = require('./auth');
const authenticateToken = require('../middlewares/auth');

// Skills
router.use('/skill', authenticateToken, skillRouter);

// Achievements 
router.use('/achievement', authenticateToken, achievementRouter);

// Projects 
router.use('/project', authenticateToken, projectRouter); // If You want to test it, you can use ProjectSubmit.html file in 'public/test/ProjectSubmit.html'. But at this time you have to remove 'authenticateToken' from router. After using html file you can write it again.

// Forms 
router.use('/form', authenticateToken, formRouter);

// Auth 
router.use('/auth', authRouter);

module.exports = router;