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

router.post('/send-email', (req, res) =>{
    console.log(req.body); 
    const { Nombre, email, Telefono, Mensaje} = req.body;
    contentHTML = `
        <h1>Informacion Usuario</h1>
        <ul>
            <li>Nombre: ${Nombre}</li>
            <li>Correo: ${email}</li>
            <li>Telefono: ${Telefono}</li>
        <ul>
        <p>${Mensaje}</p>
    
    `;

    const destinatarioGsuite = 'correo_gsuite';
    const destinatarioYahoo1 = 'proyectos@tekcomit.net';
    const destinatarioYahoo2 = 'correo_destino_yahoo_2';

    // Configurar el transportador de correo electrónico
    /*
    const transporterGsuite = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'correo_gsuite',
            pass: 'ddqlccckcfkcilzm'
        }
    });
    */
    const transporterYahoo1 = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'proyectos@tekcomit.net',
            pass: 'Wargreymon11.'
        }
    });
/*
    const transporterYahoo2 = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'cffxuwx',
            pass: 'jnunucnud'
        }
    });

    const mailOptions = {
        from: email,
        to: `${destinatarioGsuite}, ${destinatarioYahoo1}, ${destinatarioYahoo2}`,
        subject: 'Contacto cliente',
        html: contentHTML
    };
    */
    const mailOptions = {
        from: email,
        to: `${destinatarioYahoo1}`,
        subject: 'Contacto cliente',
        html: contentHTML
    };

    /*
    transporterGsuite.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a G Suite: ' + info.response);
        }
    });
    */
    transporterYahoo1.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a Yahoo: ' + info.response);
        }
    });
    /*
    transporterYahoo2.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado a Yahoo: ' + info.response);
        }
    });
    */
    //vaciar elementos del formulario
    req.body = {};

    //redirigir a la ruta de contacto
    res.redirect('/contacto')

});

module.exports = router