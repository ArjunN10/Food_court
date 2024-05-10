const mongoose=require("mongoose")


const menuItemSchema = new mongoose.Schema(
    {
        name: String,
    });

module.exports = mongoose.model('MenuItem', menuItemSchema);




