var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    exam_id : String,
    user_id : String,
    order: Number,
    correct_answer: Number,
    text: String,
    answer_1: String,
    answer_2: String,
    answer_3: String,
    answered: Number,
    question_id: Number,
    answer_4: String

});

