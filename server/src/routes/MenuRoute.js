const router=require("express").Router()
const MenuController=require("../controllers/MenuController")

router
.post("/item/create",MenuController.AddItems)
.get("/item",MenuController.getItems)



module.exports=router 







