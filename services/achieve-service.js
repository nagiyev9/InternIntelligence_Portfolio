// Path And Imports 
const Achieve = require("../models/Achieve");

// Get All Achieve 
exports.getAllAchieve = async () => {
    return await Achieve.find();
};

// Get One Achieve By ID
exports.getAchieveByID = async id => {
    return await Achieve.findOne({ _id: id });
};

// Get One Achieve By Title 
exports.getAchieveByTitle = async (title) => {
    return await Achieve.findOne({ title: title });
};

// Add New Achieve    
exports.addAchieve = async achieve => {
    return await new Achieve(achieve).save();
};

// Edit Achieve
exports.editAchieve = async (id, achieve) => {
    const isExist = await this.getAchieveByTitle(achieve.title);
    if (isExist) {
        return { status: 400, message: 'This Achieve Already Exist' };
    };
    return await Achieve.findOneAndUpdate(
        { _id: id },
        achieve,
        { new: true, runValidators: true }
    );
};

// Delete Achieve
exports.deleteAchieve = async id => {
    return await Achieve.findOneAndDelete({ _id: id });
};