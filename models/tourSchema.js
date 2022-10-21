const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    category: { 
        type: String, 
        required: [true, 'Category filed is required'], 
        enum: {
            values: ['silver', 'delux', 'gold'],
            message: "category value can not be {VALUE}, must be silver/delux/gold"
        }
    },
    name: { 
        type: String, 
        required: [true, 'Name filed is required'] 
    },
  
    
    price: { 
        type: Number, 
        required: [true, 'Price filed is required'],
        min: [0, 'Price can not be negative']
    },
    viewers: { 
        type: Number, 
        default: 0 
    },
}, { timestamps: true });

const Tour = new mongoose.model("Tour", tourSchema);
module.exports = Tour