require('dotenv').config({ path: '../.env' });

module.exports = {
    EMAIL: process.env.EMAIL_USER,  // Get email from .env
    PASSWORD: process.env.EMAIL_PASS, // Get password from .env
    HOST: 'smtp.gmail.com',
    MAILPORT: 587,
    YOURNAME: 'Hafeefa Sultan',
    MESSAGE: "Thank you for sending me a message, I'll be sure to get to it as soon as I can :)"
};
