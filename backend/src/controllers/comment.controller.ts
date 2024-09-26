import express from 'express';
import CommentModel from '../models/comment';

export class CommentController{

    addComment = (req: express.Request, res: express.Response)=>{
        let comm = new CommentModel({
            text: req.body.text,
            date: req.body.date,
            user: req.body.user
        })
    
        comm.save().then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message": "error"})
        })
    }

    getComments = (req: express.Request, res: express.Response)=>{

        CommentModel.find({})
        .then((comm)=>{res.json(comm);})
        .catch((err)=>{console.log(err);})
    }

    deleteComment = (req: express.Request, res: express.Response)=>{
        let user = req.body.user;
        let text = req.body.text;
        let date = req.body.date;

        CommentModel.deleteOne({'user': user, 'text': text, 'date': date })
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }


}

