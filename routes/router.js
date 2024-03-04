const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index');
})

router.get('/services', (req,res)=>{
    res.render('servicios');
})

router.get('/contact', (req,res)=>{
    res.render('contacto');
})


module.exports = router