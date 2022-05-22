const express=require('express');
const router=express.Router();
const {getAllMessages,postMessage}=require('../Controllers/MessageController')
const isAuth=require('../Midelware/Auth');
const isAdmin=require('../Midelware/isAdmin')
router.post('/',postMessage)
router.get('/',isAuth,isAdmin,getAllMessages)



 


module.exports =router