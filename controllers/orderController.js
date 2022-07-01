const orderDetails = require("../models/orderModel");

const storeOrderData = async (req, res) => {
  try {
    const {
      item_id,
      item_name,
      purchase_stock,
      stock_price,
      purchase_date,
      total_bill,
    } = req.body;

    const store = new orderDetails({
      item_id: item_id,
      item_name: item_name,
      purchase_stock: purchase_stock,
      stock_price: stock_price,
      purchase_date: Date(),
      total_bill: total_bill,
    });

    const record = await store.save();
    res.send(record);
  } catch (err) {
    console.log(err);
  }
};


const getOrderDetails = async (req, res) => {
    try {
      const result = await orderDetails.find();
  
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

module.exports = {storeOrderData,getOrderDetails};
