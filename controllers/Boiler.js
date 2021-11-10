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
            "loc": "In the catch of fun_name"
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
            "loc": "In the catch of fun_name"
        })
    }
}