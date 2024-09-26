import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Comment = new Schema({
    text: {type: String},
    date: {type: String},
    user: {type: String}
})

export default mongoose.model('CommentModel', Comment, 'comments');