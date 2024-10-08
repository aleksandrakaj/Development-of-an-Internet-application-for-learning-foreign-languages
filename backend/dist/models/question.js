"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Question = new Schema({
    language: { type: String },
    question: { type: String },
    answers: { type: (Array) },
    mul: { type: String },
    correct: { type: String }
});
exports.default = mongoose_1.default.model('QuestionModel', Question, 'questions');
