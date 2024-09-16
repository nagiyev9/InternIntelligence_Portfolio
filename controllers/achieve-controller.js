// Path And Imports 
const achieveService = require('../services/achieve-service');

// Get All Achieve 
exports.getAllAchieves = async (req, res) => {
    try {
        const achieves = await achieveService.getAllAchieve();
        res.status(200).json(achieves);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get One Achieve By ID
exports.getAchieveByID = async (req, res) => {
    const id = req.params.id;
    try {
        const skill = await achieveService.getAchieveByID(id);
        res.status(200).json(skill);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Achieve
exports.addAchieve = async (req, res) => {
    const title = req.body;
    if (!title) {
        return res.status(403).json({ message: 'Please Provide Title' });
    };
    try {
        const isExist = await achieveService.getAchieveByTitle(title.title);

        if (isExist) {
            return res.status(400).json({
                status: 400,
                message: 'This skill already exist'
            });
        };

        const newAchieve = await achieveService.addAchieve(title);
        res.status(201).json({
            status: 201,
            message: 'Achieve Added Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Achieve 
exports.editAchieve = async (req, res) => {
    const title = req.body;
    const id = req.params.id;

    if (title === '') {
        return { message: 'Please Provide title' };
    };

    try {
        const isExist = await achieveService.getAchieveByTitle(title.title);

        if (isExist) {
            return res.status(400).json({
                status: 400,
                message: 'This skill already exist'
            });
        };

        const editAchieve = await achieveService.editAchieve(id, title);
        res.status(200).json({
            status: 200,
            message: 'Achieve Editted Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Achieve
exports.deleteAchieve = async (req, res) => {
    const id = req.params.id;
    try {
        const achieve = await achieveService.deleteAchieve(id);
        res.status(200).json({
            status: 200,
            message: 'Achieve deleted successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};