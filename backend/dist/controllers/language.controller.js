"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageController = void 0;
const language_1 = __importDefault(require("../models/language"));
const languagedata_1 = __importDefault(require("../models/languagedata"));
const languagedatachild_1 = __importDefault(require("../models/languagedatachild"));
class LanguageController {
    constructor() {
        this.getLanguage = (req, res) => {
            let language = req.body.language;
            language_1.default.findOne({ 'name': language })
                .then((data) => { res.json(data); })
                .catch((err) => { console.log(err); });
        };
        this.getLanguageData = (req, res) => {
            let language = req.body.language;
            let parent = req.body.parent;
            languagedata_1.default.findOne({ 'language': language, 'parent': parent })
                .then((data) => { res.json(data); })
                .catch((err) => { console.log(err); });
        };
        this.getLanguageDataChildren = (req, res) => {
            let language = req.body.language;
            languagedatachild_1.default.find({ 'language': language })
                .then((data) => { res.json(data); })
                .catch((err) => { console.log(err); });
        };
        this.setShLanguageData = (req, res) => {
            let language = req.body.language;
            let parent = req.body.parent;
            let sh = req.body.show;
            languagedata_1.default.updateOne({ 'language': language, 'parent': parent }, { $set: { 'show': sh } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.setLanguageItems = (req, res) => {
            let language = req.body.language;
            let items = req.body.items;
            language_1.default.updateOne({ 'name': language }, { $set: { 'items': items } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.addLanguageDataChild = (req, res) => {
            let child = new languagedatachild_1.default({
                language: req.body.language,
                parent: req.body.parent,
                name: req.body.name,
                text: req.body.text
            });
            child.save().then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.setLanguageDataItems = (req, res) => {
            let language = req.body.language;
            let parent = req.body.parent;
            let items = req.body.items;
            languagedata_1.default.updateOne({ 'language': language, 'parent': parent }, { $set: { 'items': items } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.addLanguageData = (req, res) => {
            let data = new languagedata_1.default({
                language: req.body.language,
                parent: req.body.parent,
                items: req.body.items,
                show: req.body.show
            });
            data.save().then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
    }
}
exports.LanguageController = LanguageController;
