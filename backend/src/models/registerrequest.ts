import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RegisterRequest = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    password: {type: String},
    email: {type: String},
    address: {type: String},
    type: {type: Number},
    phoneNumber: {type: String},
    imageData: {type: String}
})

export default mongoose.model('RegisterRequestModel', RegisterRequest, 'registerrequests');