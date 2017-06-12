const nodemailer = require('nodemailer');

//Send emails through users gmail acct;
module.exports = function(body,  next){
	const { message, recipients, subject, organization, token, email } = body;

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
    
		auth: {
			user: 'adamhs3521@gmail.com',
			pass: process.env.PASSWORD,
      
		},
		logger: true, // log to console
		debug: true,// include SMTP traffic in the logs
	});

	transporter.sendMail({
		from:'Adam Stein',
		bcc: recipients, 
		subject: subject,
		html:`<div> ${message}</div>
            <hr>
          <h4>Please Do Not Reply To This Message.</h4>`,
            
	}, 
  (err,info) => {
	if(err){
		return next(err);
	}else{
		return next(null, info);
	}
});
};