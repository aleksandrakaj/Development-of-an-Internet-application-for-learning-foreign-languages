"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = require("../controllers/question.controller");
const questionRouter = express_1.default.Router();
questionRouter.route('/getQuestions').post((req, res) => new question_controller_1.QuestionController().getQuestions(req, res));
exports.default = questionRouter;
