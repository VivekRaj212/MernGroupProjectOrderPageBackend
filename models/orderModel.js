const mongoose= require("mongoose");

const orderSchema= new mongoose.Schema({

       item_id: {type: String,required: true},
       item_name: {type: String,required: true},
       purchase_stock: {type: Number,required: true},
       stock_price: {type: mongoose.Decimal128,required: true},
       purchase_date:{type: Date,required: true},
       total_bill: {type: mongoose.Decimal128,required: true},


})


const orderDetails= mongoose.model("orderdata",orderSchema)
module.exports= orderDetails;



