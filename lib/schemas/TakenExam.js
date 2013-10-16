var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    id: Number,
    user_id: String,
    exam_id: Number,
    correct_percent: Number,
    ended: Boolean,
    current_id: Number,
    current_order: Number,
    valutazione_6: String,
    valutazione_5: Number,
    valutazione_4: Number,
    valutazione_3: Number,
    valutazione_2: Number,
    valutazione_1: Number,
    concluso_il: Date

});

