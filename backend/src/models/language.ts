import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Language = new Schema({
    name: {type: String},
    items: {type: Array<String>}
})

export default mongoose.model('LanguageModel', Language, 'languages');