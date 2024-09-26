import express from 'express';
import UserModel from '../models/user'
import RegisterRequestModel from '../models/registerrequest'
import nodemailer from 'nodemailer';

export class UserController{

    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        UserModel.findOne({'username': username, 'password': password})
        .then((user)=>{res.json(user);})
        .catch((err)=>{console.log(err);})
    }

    register = (req: express.Request, res: express.Response)=>{
        let regReq = new RegisterRequestModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            imageData: req.body.imageData,
            type: 0
        })

        regReq.save().then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    getUserWithUsername = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        UserModel.findOne({'username': username})
        .then((user)=>{res.json(user);})
        .catch((err)=>{console.log(err);})
    }

    getRegReqWithUsername = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        RegisterRequestModel.findOne({'username': username})
        .then((user)=>{res.json(user);})
        .catch((err)=>{console.log(err);})
    }

    getUserWithEmail = (req: express.Request, res: express.Response)=>{
        let email = req.body.email;

        UserModel.findOne({'email': email})
        .then((user)=>{res.json(user);})
        .catch((err)=>{console.log(err);})
    }

    changeFirstName = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let firstName = req.body.firstName;

        UserModel.updateOne({'username' : username}, {$set : {'firstName': firstName}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changeLastName = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let lastName = req.body.lastName;

        UserModel.updateOne({'username' : username}, {$set : {'lastName': lastName}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changeUsername = (req:express.Request, res:express.Response)=>{
        let oldUsername = req.body.oldUsername;
        let newUsername = req.body.newUsername;

        UserModel.updateOne({'username' : oldUsername}, {$set : {'username' : newUsername}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changeEmail = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let email = req.body.email;

        UserModel.updateOne({'username' : username}, {$set : {'email': email}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changeAddress = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let address = req.body.address;

        UserModel.updateOne({'username' : username}, {$set : {'address': address}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changePhoneNumber = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let phoneNumber = req.body.phoneNumber;

        UserModel.updateOne({'username' : username}, {$set : {'phoneNumber': phoneNumber}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changePassword = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        UserModel.updateOne({'username' : username}, {$set : {'password': password}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    changeProfilePic = (req:express.Request, res:express.Response)=>{
        let username = req.body.username;
        let imageData = req.body.imageData;

        UserModel.updateOne({'username' : username}, {$set : {'imageData': imageData}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    acceptRegister = (req: express.Request, res: express.Response)=>{
        let user = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            imageData: req.body.imageData,
            type: req.body.type
        })

        user.save().then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    getRegisterRequests = (req: express.Request, res: express.Response)=>{

        RegisterRequestModel.find({})
        .then((comm)=>{res.json(comm);})
        .catch((err)=>{console.log(err);})
    }

    deleteRegisterRequest = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let email = req.body.email;

        RegisterRequestModel.deleteOne({'username': username, 'email': email})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })

    }

    sendEmail = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let email = req.body.email;
        let message = req.body.message;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: 'addminaddmin1510@gmail.com', // Replace with your email address
              pass: 'fuku rkod pibv imei' // Replace with your email password
            }
        });

        const mailOptions = {
            from: 'addminaddmin1510@gmail.com',
            to: email, // Replace with recipient email address
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
              res.status(400).json({"message" : "error"})
            } else {
              console.log('Email sent:', info.response);
              res.json({"message": "ok"})
            }
        });
    }



}