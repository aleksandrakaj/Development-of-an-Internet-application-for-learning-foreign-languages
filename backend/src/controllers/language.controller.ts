import express from 'express';
import LanguageModel from '../models/language';
import LanguageDataModel from '../models/languagedata';
import LanguageDataChildModel from '../models/languagedatachild';

export class LanguageController{

    getLanguage = (req: express.Request, res: express.Response)=>{
        let language = req.body.language;

        LanguageModel.findOne({'name': language})
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err);})
    }

    
    getLanguageData = (req: express.Request, res: express.Response)=>{
        let language = req.body.language;
        let parent = req.body.parent;

        LanguageDataModel.findOne({'language': language, 'parent': parent})
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err);})
    }

    getLanguageDataChildren = (req: express.Request, res: express.Response)=>{
        let language = req.body.language;

        LanguageDataChildModel.find({'language': language})
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err);})
    }

    setShLanguageData = (req:express.Request, res:express.Response)=>{
        let language = req.body.language;
        let parent = req.body.parent;
        let sh = req.body.show;

        LanguageDataModel.updateOne({'language' : language, 'parent': parent}, {$set : {'show': sh}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    setLanguageItems = (req:express.Request, res:express.Response)=>{
        let language = req.body.language;
        let items = req.body.items;

        LanguageModel.updateOne({'name' : language}, {$set : {'items': items}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    addLanguageDataChild = (req:express.Request, res:express.Response)=>{

        let child = new LanguageDataChildModel({
            language: req.body.language,
            parent: req.body.parent,
            name: req.body.name,
            text: req.body.text
        })

        child.save().then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    setLanguageDataItems = (req:express.Request, res:express.Response)=>{
        let language = req.body.language;
        let parent = req.body.parent;
        let items = req.body.items;

        LanguageDataModel.updateOne({'language' : language, 'parent': parent}, {$set : {'items': items}})
        .then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

    addLanguageData = (req:express.Request, res:express.Response)=>{

        let data = new LanguageDataModel({
            language: req.body.language,
            parent: req.body.parent,
            items: req.body.items,
            show: req.body.show
        })

        data.save().then((resp)=>{
            res.json({"message": "ok"})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({"message" : "error"})
        })
    }

}