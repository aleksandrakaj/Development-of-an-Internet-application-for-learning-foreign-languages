"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const comment_1 = __importDefault(require("../models/comment"));
class CommentController {
    constructor() {
        this.addComment = (req, res) => {
            let comm = new comment_1.default({
                text: req.body.text,
                date: req.body.date,
                user: req.body.user
            });
            comm.save().then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.getComments = (req, res) => {
            comment_1.default.find({})
                .then((comm) => { res.json(comm); })
                .catch((err) => { console.log(err); });
        };
        this.deleteComment = (req, res) => {
            let user = req.body.user;
            let text = req.body.text;
            let date = req.body.date;
            comment_1.default.deleteOne({ 'user': user, 'text': text, 'date': date })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
    }
}
exports.CommentController = CommentController;
