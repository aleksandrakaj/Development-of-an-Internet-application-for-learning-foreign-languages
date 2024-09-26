import express from 'express';
import { LanguageController } from '../controllers/language.controller';

const languageRouter = express.Router();

languageRouter.route('/getLanguage').post(
    (req, res) => new LanguageController().getLanguage(req,res)
)

languageRouter.route('/getLanguageData').post(
    (req, res) => new LanguageController().getLanguageData(req,res)
)

languageRouter.route('/getLanguageDataChildren').post(
    (req, res) => new LanguageController().getLanguageDataChildren(req,res)
)

languageRouter.route('/setShLanguageData').post(
    (req, res) => new LanguageController().setShLanguageData(req,res)
)

languageRouter.route('/setLanguageItems').post(
    (req, res) => new LanguageController().setLanguageItems(req,res)
)

languageRouter.route('/setLanguageDataItems').post(
    (req, res) => new LanguageController().setLanguageDataItems(req,res)
)

languageRouter.route('/addLanguageDataChild').post(
    (req, res) => new LanguageController().addLanguageDataChild(req,res)
)

languageRouter.route('/addLanguageData').post(
    (req, res) => new LanguageController().addLanguageData(req,res)
)

export default languageRouter;