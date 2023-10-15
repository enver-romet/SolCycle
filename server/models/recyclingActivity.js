const mongoose = require('mongoose');

const recyclingActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    itemsRecycled: [{
        type: String
    }],
    tokensEarned: {
        type: Number,
        default: 0
    }
});

const RecyclingActivity = mongoose.model('RecyclingActivity', recyclingActivitySchema);

module.exports = RecyclingActivity;
