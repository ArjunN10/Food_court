const mongoose=require("mongoose")

const menuCategorySchema = new mongoose.Schema({
    name: String,
    category:String,
    price: Number,
    menuItems:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"MenuItem"

        }
    ]

});

module.exports = mongoose.model('MenuCategory', menuCategorySchema);