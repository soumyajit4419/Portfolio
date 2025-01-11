var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const transporter = require('./transporter');
require('dotenv').config({ path: '../.env' }); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route for handling the form submission
router.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ status: 'fail', error: 'Missing required fields' });
    }

    const senderEmail = `${name} <${creds.EMAIL}>`;
    const yourEmail = `${creds.YOURNAME} <${creds.EMAIL}>`;
    const content = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;

    const mail = {
        from: senderEmail,
        to: creds.EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: content,
    };

    // Send the main email
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.error('Error sending email:', err);
            return res.json({ status: 'fail' });
        }

        // If success, send auto-reply email
        transporter.sendMail({
            from: yourEmail,
            to: email,
            subject: 'Message received',
            text: `Hi ${name},\nThank you for reaching out! I will get back to you soon.\n\nBest regards,\n${creds.YOURNAME}`,
            html: `<p>Hi ${name},<br>Thank you for reaching out! I will get back to you soon.<br><br>Best regards,<br>${creds.YOURNAME}</p>`,
        }, (autoReplyError, info) => {
            if (autoReplyError) {
                console.error('Error sending auto-reply:', autoReplyError);
            } else {
                console.log('Auto-reply sent:', info.response);
            }
        });

        // Return success response
        res.json({ status: 'success' });
    });
});

const serverPort = 5000;

app.get('/', (req, res) => {
    res.json('hi');
});

app.use('/send', router);

app.listen(serverPort, () => {
    console.log(`Backend is running on port ${serverPort}`);
});
