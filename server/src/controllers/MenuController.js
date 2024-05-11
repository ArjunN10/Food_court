const MenuCategory =require("../models/MenuCategory")
const MenuItem=require("../models/MenuItem")

const AddItems=async (req, res) => { 
        try {
            const { Name,category,price, itemNames } = req.body;
    
            const items = await Promise.all(itemNames.map(async (itemName) => {
                const item = new MenuItem({ name: itemName });
                await item.save();
                return item._id;
            }));
            
            const categorylist = new MenuCategory({
                name:Name,
                category:category,
                price:price,
                menuItems: items
            });
    
            await categorylist.save();


            res.status(201).json({
                status:"success",
                message:"FoodItem Feched Successfully",
                data:categorylist
            });
        } catch (error) {
            console.error('Error adding category with items:', error);
            res.status(500).json({
                error:"failure",
                message: 'Server Error'
             });
        }
    };


    const getItems = async (req, res) => {
        try {
            const categories = await MenuCategory.find().populate('menuItems');
            res.status(200).json({
                status:"success",
                message:"FoodItem Feched Successfully",
                data:categories
            });

        } catch (error) {
            console.error('Error fetching categories with items:', error);
            res.status(500).json({
                 error:"failure",
                 message: 'Server Error'
             });
        }
    };


    




module.exports={
    AddItems,
    getItems
}