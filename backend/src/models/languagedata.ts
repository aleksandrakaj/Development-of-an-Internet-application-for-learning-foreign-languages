import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let LanguageData = new Schema({
    language: {type: String},
    parent: {type: String},
    items: {type: Array<String>},
    show: {type: String}
})

export default mongoose.model('LanguageDataModel', LanguageData, 'languagesdata');