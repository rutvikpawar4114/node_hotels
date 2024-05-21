const mongoose = require ('mongoose');

const menuItemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    taste :{
        type: String,
        required: true,
        enum :['Sweet', 'spicy' ,'sour'],
      
    },
    is_drink :{ 
        type: Boolean,
        required: true,
    },
    num_sales:{
        type: Number,
        default : 0,
    
    }

});


    const MenuItem = mongoose.model("MenuItems", menuItemSchema);

    module.exports = MenuItem;