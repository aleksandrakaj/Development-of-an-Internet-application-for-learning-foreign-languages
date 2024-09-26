import express from 'express';
import { QuestionController } from '../controllers/question.controller';

const questionRouter = express.Router();

questionRouter.route('/getQuestions').post(
    (req, res) => new QuestionController().getQuestions(req,res)
)

export default questionRouter;