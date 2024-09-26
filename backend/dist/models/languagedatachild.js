"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let LanguageDataChild = new Schema({
    language: { type: String },
    parent: { type: String },
    name: { type: String },
    text: { type: String }
});
exports.default = mongoose_1.default.model('LanguageDataChildModel', LanguageDataChild, 'languagesdatachildren');
