const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Simple } = require('../modules/simple');
const { Object } = require('../modules/object');

exports.fun_name_POST = async ( req,res ) => {
    try{
        const {  } = req.body;

        res.status(200).json({
            "isSuccess": true,
            "message": "OK",
            "data": {

            }
        })
    }
    catch(err){
        console.log("message:", err.message);
        console.log("stack:", err.stack);
        res.status(500).json({
            "isSuccess": false,
            "message": "Internal Server Error",
            "loc": "In the catch of fun_name_POST"
        })
    }
}

exports.error_database = async ( req,res ) => {
    try{
        const {  } = req.body;
        try{
            const result = await Simple.find({});
            const result = await Simple.findOne({});
        }catch(err){
            console.log("message:", err.message);
            console.log("stack:", err.stack);
            res.status(500).json({
                "isSuccess": false,
                "message": "Internal Server Error",
                "loc": "In the catch of error_database"
            })
        }

        res.status(200).json({
            "isSuccess": true,
            "message": "OK",
            "data": {

            }
        })
    }
    catch(err){
        console.log("message:", err.message);
        console.log("stack:", err.stack);
        res.status(500).json({
            "isSuccess": false,
            "message": "Internal Server Error",
            "loc": "In the catch of error_database"
        })
    }
}

exports.json_handle = async ( req,res ) => {
    try{
        const {  } = req.body;
        try{
            const bundle = jwt.verify(token , process.env.ACCESS);
        }
        catch(err){
            console.log("message:", err.message);
            console.log("stack:", err.stack);
            res.status(402).json({
                "isSuccess": false,
                "message": "Unauthorized",
                "loc": "In the catch of json_handle"
            })
        }


        res.status(200).json({
            "isSuccess": true,
            "message": "OK",
            "data": {

            }
        })
    }
    catch(err){
        console.log("message:", err.message);
        console.log("stack:", err.stack);
        res.status(500).json({
            "isSuccess": false,
            "message": "Internal Server Error",
            "loc": "In the catch of json_handle"
        })
    }
}

exports.GET = async ( req,res ) => {
    try{

        res.status(200).json({
            "isSuccess": true,
            "message": "OK",
            "data": {

            }
        })
    }
    catch(err){
        console.log("message:", err.message);
        console.log("stack:", err.stack);
        res.status(500).json({
            "isSuccess": false,
            "message": "Internal Server Error",
            "loc": "In the catch of GET"
        })
    }
}