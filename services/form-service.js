// Path And Imports
const Form = require("../models/Form");

// Get All Forms 
exports.getAllForms = async () => {
    return await Form.find()
        .populate('userId' , 'username email _id');
};

// Get Form By Id
exports.getFormByID = async id => {
    return await Form.findById(id).populate('userId', 'username email _id')
};

// Add New Form
exports.addNewForm = async form => {
    return await new Form(form).save();
};

// Delete Form
exports.deleteForm = async id => {
    return await Form.findOneAndDelete({ _id: id });
};