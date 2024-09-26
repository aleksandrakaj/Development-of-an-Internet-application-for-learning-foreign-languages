"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const language_controller_1 = require("../controllers/language.controller");
const languageRouter = express_1.default.Router();
languageRouter.route('/getLanguage').post((req, res) => new language_controller_1.LanguageController().getLanguage(req, res));
languageRouter.route('/getLanguageData').post((req, res) => new language_controller_1.LanguageController().getLanguageData(req, res));
languageRouter.route('/getLanguageDataChildren').post((req, res) => new language_controller_1.LanguageController().getLanguageDataChildren(req, res));
languageRouter.route('/setShLanguageData').post((req, res) => new language_controller_1.LanguageController().setShLanguageData(req, res));
languageRouter.route('/setLanguageItems').post((req, res) => new language_controller_1.LanguageController().setLanguageItems(req, res));
languageRouter.route('/setLanguageDataItems').post((req, res) => new language_controller_1.LanguageController().setLanguageDataItems(req, res));
languageRouter.route('/addLanguageDataChild').post((req, res) => new language_controller_1.LanguageController().addLanguageDataChild(req, res));
languageRouter.route('/addLanguageData').post((req, res) => new language_controller_1.LanguageController().addLanguageData(req, res));
exports.default = languageRouter;
