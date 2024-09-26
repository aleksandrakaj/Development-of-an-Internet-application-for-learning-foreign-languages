import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/user.router';
import commentRouter from './routers/comment.router';
import languageRouter from './routers/language.router';

import bodyParser from 'body-parser';
import questionRouter from './routers/question.router';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myappDB');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connected')
})

const router = express.Router();

router.use('/users', userRouter);
router.use('/comments', commentRouter);
router.use('/language', languageRouter);
router.use('/questions', questionRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));