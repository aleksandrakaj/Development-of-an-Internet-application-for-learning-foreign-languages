import express from 'express';
import { CommentController } from '../controllers/comment.controller';

const commentRouter = express.Router();

commentRouter.route('/addComment').post(
    (req, res) => new CommentController().addComment(req,res)
)

commentRouter.route('/getComments').get(
    (req, res) => new CommentController().getComments(req,res)
)

commentRouter.route('/deleteComment').post(
    (req, res) => new CommentController().deleteComment(req,res)
)


export default commentRouter;