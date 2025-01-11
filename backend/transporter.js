const nodemailer = require('nodemailer');
const creds = require('./config');
require('dotenv').config({ path: '../.env' }); 

const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use Gmail's built-in service
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail email
        pass: process.env.EMAIL_PASS,  // Your App Password (from Gmail 2FA)
    },
});

transporter.verify((error) => {
    if (error) {
        console.log('Error verifying transporter:', error);
    } else {
        console.log('Server is ready to take messages');
    }
});

module.exports = transporter;
