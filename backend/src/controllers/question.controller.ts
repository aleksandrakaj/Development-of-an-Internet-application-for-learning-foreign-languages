import express from 'express';
import QuestionModel from '../models/question';


export class QuestionController{

    getQuestions = (req: express.Request, res: express.Response)=>{
        let language = req.body.language;

        QuestionModel.find({'language': language})
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err);})
    }
   

}