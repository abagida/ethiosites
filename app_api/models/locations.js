var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    reviewText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var transmissionSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    transmissionText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var ipSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    ipText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var powerSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    powerText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var staffSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    staffText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var coreSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    coreText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var ranSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    ranText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var generalSchema = new mongoose.Schema({
     author: {type: String, required: true},
    
    generalText: {type: String, required: true},
     createdOn: {
        type: Date,
        "default": Date.now
    }
});

var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    // Always store coordinates longitude, latitude order.
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    generals: [generalSchema],
    transmissions: [transmissionSchema],
    cores: [coreSchema],
    rans: [ranSchema],
    ips: [ipSchema],
    powers: [powerSchema],
    staffs: [staffSchema],
    reviews: [reviewSchema]

});

mongoose.model('Location', locationSchema);