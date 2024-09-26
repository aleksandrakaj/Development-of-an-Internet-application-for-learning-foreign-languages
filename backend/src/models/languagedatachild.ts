import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let LanguageDataChild = new Schema({
    language: {type: String},
    parent: {type: String},
    name: {type:String},
    text: {type:String}
})

export default mongoose.model('LanguageDataChildModel', LanguageDataChild, 'languagesdatachildren');