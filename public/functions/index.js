const functions = require("firebase-functions");

const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
// require('dotenv').config()

// const {SENDER_EMAIL, SENDER_EMAIL_PASSWORD} = process.env;


exports.sensInvitation=functions.firestore.document("Guests")
.onUpdate((snap, ctx) => {
    // const data = snap.data();
const authData = nodemailer.createTransport({
    host: 'smtp.gmail.com',
port: 465,    
service: 'gmail',
secure: true,
auth: {
    user: "rakesh85238@gmail.com",
    pass: "mayday@15"
}
})
authData.sendMail({
    from: "dontreply@gmail.com",
    to: "rakesh.great.6565@gmail.com",
    subject: "Test mail",
    text: "Test mail"
}).then(res =>{
    console.log("email sent")
})
.catch(err=>{
    console.log(err)
})
})
