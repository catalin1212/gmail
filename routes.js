const nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'catalintest11@gmail.com',
        pass: 'Password11'
    }
});

var appRouter = function (app) {

    app.post("/mail", function (req, res) {

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"NoReplay" <noreplay@noreplay.com>', // sender address
            to: req.body.destinatars, // list of receivers
            subject: 'Website Trucks n Taxes', // Subject line
            text: req.body.text, // plain text body
            html: '<b>Name :'+req.body.name+'</b><br>'+ 
                    '<b>Email : '+req.body.email+'</b><br>'+
                    '<b>Phone : '+req.body.phone+'</b><br>'+
                    '<b>Text : '+req.body.text+'</b><br>'
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send(info);
        });
    });
}

module.exports = appRouter;