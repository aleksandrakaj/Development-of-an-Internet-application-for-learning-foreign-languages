"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const question_1 = __importDefault(require("../models/question"));
class QuestionController {
    constructor() {
        this.getQuestions = (req, res) => {
            let language = req.body.language;
            question_1.default.find({ 'language': language })
                .then((data) => { res.json(data); })
                .catch((err) => { console.log(err); });
        };
    }
}
exports.QuestionController = QuestionController;
