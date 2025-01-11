router.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var senderEmail = `${name} <${creds.EMAIL}>`;
    var yourEmail = `${creds.YOURNAME} <${creds.EMAIL}>`;
    var content = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;

    var mail = {
        from: senderEmail,
        to: creds.EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: content,
    };

    // Deliver message from your portfolio to your email address
    transporter.sendMail(mail, (err, data) => {
        console.log(err);
        console.log(data);
        if (err) {
            res.json({
                status: 'fail',
            });
        } else {
            res.json({
                status: 'success',
            });

            // If Success, send Auto Reply email
            transporter.sendMail(
                {
                    from: yourEmail,
                    to: email,
                    subject: 'Message received',
                    text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${creds.YOURNAME}\n${creds.YOURSITE}\n\n\nMessage Details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
                    html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${creds.YOURNAME}<br>${creds.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br>Email: ${email}<br>Message: ${message}</p>`,
                },
                function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Message sent: ' + info.response);
                    }
                }
            );
        }
    });
});
