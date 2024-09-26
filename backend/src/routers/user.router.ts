import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res) => new UserController().login(req, res)
)

userRouter.route('/register').post(
    (req, res) => new UserController().register(req, res)
)

userRouter.route('/getUserWithUsername').post(
    (req, res) => new UserController().getUserWithUsername(req, res)
)

userRouter.route('/getRegReqWithUsername').post(
    (req, res) => new UserController().getRegReqWithUsername(req, res)
)

userRouter.route('/getUserWithEmail').post(
    (req, res) => new UserController().getUserWithEmail(req, res)
)

userRouter.route('/changeFirstName').post(
    (req, res) => new UserController().changeFirstName(req,res)
)

userRouter.route('/changeLastName').post(
    (req, res) => new UserController().changeLastName(req,res)
)

userRouter.route('/changeUsername').post(
    (req, res) => new UserController().changeUsername(req,res)
)

userRouter.route('/changeEmail').post(
    (req, res) => new UserController().changeEmail(req,res)
)

userRouter.route('/changeAddress').post(
    (req, res) => new UserController().changeAddress(req,res)
)

userRouter.route('/changePhoneNumber').post(
    (req, res) => new UserController().changePhoneNumber(req,res)
)

userRouter.route('/changePassword').post(
    (req, res) => new UserController().changePassword(req,res)
)

userRouter.route('/changeProfilePic').post(
    (req, res) => new UserController().changeProfilePic(req,res)
)

userRouter.route('/acceptRegister').post(
    (req, res) => new UserController().acceptRegister(req,res)
)

userRouter.route('/getRegisterRequests').get(
    (req, res) => new UserController().getRegisterRequests(req,res)
)

userRouter.route('/deleteRegisterRequest').post(
    (req, res) => new UserController().deleteRegisterRequest(req,res)
)

userRouter.route('/sendEmail').post(
    (req, res) => new UserController().sendEmail(req, res)
)

export default userRouter;