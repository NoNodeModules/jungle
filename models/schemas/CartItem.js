const mongoose =require ("mongoose");

const cartItemSchema = mongoose.Schema({
    productId: Number,
    name: String,
    price: Number,
    qty: Number,
    countInStock: Number,
});

const cartItem = mongoose.model("cartItem", cartItemSchema);

module.exports = cartItem;
