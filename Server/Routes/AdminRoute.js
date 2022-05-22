const isAdmin=require('../Midelware/isAdmin');
const isAuth=require('../Midelware/Auth')
const express=require('express');
const router=express.Router();
const {getAllusers}=require('../Controllers/AdminController')

router.get('/',isAuth,isAdmin, getAllusers)
module.exports = router