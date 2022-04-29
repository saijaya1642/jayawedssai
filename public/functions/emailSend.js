const functions = require("firebase-functions");

const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()
// require('dotenv').config()

// const {SENDER_EMAIL, SENDER_EMAIL_PASSWORD} = process.env;


const sendemail = functions.https.onCall(async(data,context) => {
    const sender = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,    
        secure:true,
        auth : {
            user : 'rakesh85238@gmail.com',
            pass : 'mayday@15'
        }
    })

    sender.sendMail({
        from : 'dontreply@gmail.com',
        to : 'rk20035@gmail.com',
        subject : 'Test mail',
        text : 'Test mail'  
    }).then(res => console.log('sent')).catch(err=>console.log(err))

})


