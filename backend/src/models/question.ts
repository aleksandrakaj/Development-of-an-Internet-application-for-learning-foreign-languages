import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Question = new Schema({
    language: {type: String},
    question: {type: String},
    answers: {type: Array<String>},
    mul: {type: String},
    correct: {type: String}
})

export default mongoose.model('QuestionModel', Question, 'questions');