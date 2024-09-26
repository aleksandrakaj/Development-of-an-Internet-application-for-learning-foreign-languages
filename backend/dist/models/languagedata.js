"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let LanguageData = new Schema({
    language: { type: String },
    parent: { type: String },
    items: { type: (Array) },
    show: { type: String }
});
exports.default = mongoose_1.default.model('LanguageDataModel', LanguageData, 'languagesdata');
