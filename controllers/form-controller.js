// Path And Imports 
const formService = require('../services/form-service');

// Get All Forms
exports.getAllForms = async (req, res) => {
    try {
      const forms = await formService.getAllForms();
      res.status(200).json(forms);  
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get Form By ID
exports.getFormByID = async (req, res) => {
    const id = req.params.id;
    try {
        const form = await formService.getFormByID(id);
        res.status(200).json(form);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Form 
exports.addNewForm = async (req, res) => {
    const form = req.body;
    form.userId = req.body.userId;
    try {
      const newForm = await formService.addNewForm(form);
      res.status(201).json({
        status: 200,
        message: 'Form sent successfully'
      });  
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Form 
exports.deleteForm = async (req, res) => {
    const id = req.params.id;
    try {
        const form = await formService.deleteForm(id);
        res.status(200).json({
            status: 200,
            message: 'Form deleted successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);  
    };
};