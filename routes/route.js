const express= require("express");
const router= express.Router();

const {storeOrderData,getOrderDetails}= require("../controllers/orderController");


router.post("/order",storeOrderData);

router.get("/get-details",getOrderDetails);



module.exports= router;





