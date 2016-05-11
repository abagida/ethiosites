var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: {type: String, required: true},
   
    reviewText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var siteInfoSchema = new mongoose.Schema({
    info: {
        type: String,
        required: true
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
    siteInfo: [siteInfoSchema],
    transmission: [siteInfoSchema],
    core: [siteInfoSchema],
    ran: [siteInfoSchema],
    ip: [siteInfoSchema],
    staff: [siteInfoSchema],
    reviews: [reviewSchema]

});

mongoose.model('Location', locationSchema);