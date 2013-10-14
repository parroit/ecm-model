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
    concluso_il: Date,
    questions: [

        {
            "id": Number,
            "order": Number,
            "correct_answer": Number,
            "text": String,
            "answer_1": String,
            "answer_2": String,
            "answer_3": String,
            "answered": Number,
            "question_id": Number,
            "answer_4": String
        }

    ]
});

