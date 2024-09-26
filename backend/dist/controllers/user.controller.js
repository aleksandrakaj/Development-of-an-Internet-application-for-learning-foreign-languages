"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerrequest_1 = __importDefault(require("../models/registerrequest"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password })
                .then((user) => { res.json(user); })
                .catch((err) => { console.log(err); });
        };
        this.register = (req, res) => {
            let regReq = new registerrequest_1.default({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                imageData: req.body.imageData,
                type: 0
            });
            regReq.save().then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.getUserWithUsername = (req, res) => {
            let username = req.body.username;
            user_1.default.findOne({ 'username': username })
                .then((user) => { res.json(user); })
                .catch((err) => { console.log(err); });
        };
        this.getRegReqWithUsername = (req, res) => {
            let username = req.body.username;
            registerrequest_1.default.findOne({ 'username': username })
                .then((user) => { res.json(user); })
                .catch((err) => { console.log(err); });
        };
        this.getUserWithEmail = (req, res) => {
            let email = req.body.email;
            user_1.default.findOne({ 'email': email })
                .then((user) => { res.json(user); })
                .catch((err) => { console.log(err); });
        };
        this.changeFirstName = (req, res) => {
            let username = req.body.username;
            let firstName = req.body.firstName;
            user_1.default.updateOne({ 'username': username }, { $set: { 'firstName': firstName } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changeLastName = (req, res) => {
            let username = req.body.username;
            let lastName = req.body.lastName;
            user_1.default.updateOne({ 'username': username }, { $set: { 'lastName': lastName } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changeUsername = (req, res) => {
            let oldUsername = req.body.oldUsername;
            let newUsername = req.body.newUsername;
            user_1.default.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changeEmail = (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            user_1.default.updateOne({ 'username': username }, { $set: { 'email': email } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changeAddress = (req, res) => {
            let username = req.body.username;
            let address = req.body.address;
            user_1.default.updateOne({ 'username': username }, { $set: { 'address': address } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changePhoneNumber = (req, res) => {
            let username = req.body.username;
            let phoneNumber = req.body.phoneNumber;
            user_1.default.updateOne({ 'username': username }, { $set: { 'phoneNumber': phoneNumber } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.updateOne({ 'username': username }, { $set: { 'password': password } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.changeProfilePic = (req, res) => {
            let username = req.body.username;
            let imageData = req.body.imageData;
            user_1.default.updateOne({ 'username': username }, { $set: { 'imageData': imageData } })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.acceptRegister = (req, res) => {
            let user = new user_1.default({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                imageData: req.body.imageData,
                type: req.body.type
            });
            user.save().then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.getRegisterRequests = (req, res) => {
            registerrequest_1.default.find({})
                .then((comm) => { res.json(comm); })
                .catch((err) => { console.log(err); });
        };
        this.deleteRegisterRequest = (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            registerrequest_1.default.deleteOne({ 'username': username, 'email': email })
                .then((resp) => {
                res.json({ "message": "ok" });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ "message": "error" });
            });
        };
        this.sendEmail = (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            let message = req.body.message;
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'addminaddmin1510@gmail.com',
                    pass: 'fuku rkod pibv imei' // Replace with your email password
                }
            });
            const mailOptions = {
                from: 'addminaddmin1510@gmail.com',
                to: email,
                subject: 'Registration successful',
                text: `
              Hello ${username},
                
              ${message}

              Best regards,
              ALinguaK
            `
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(400).json({ "message": "error" });
                }
                else {
                    console.log('Email sent:', info.response);
                    res.json({ "message": "ok" });
                }
            });
        };
    }
}
exports.UserController = UserController;
