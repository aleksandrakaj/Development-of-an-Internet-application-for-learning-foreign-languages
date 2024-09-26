"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RegisterRequest = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    address: { type: String },
    type: { type: Number },
    phoneNumber: { type: String },
    imageData: { type: String }
});
exports.default = mongoose_1.default.model('RegisterRequestModel', RegisterRequest, 'registerrequests');
