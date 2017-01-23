'use strict';

module.exports = function(Guest) {

//{"username":"admin","password":"admin"}
    // send an email
  Guest.sendEmail = function(cb) {
    Guest.app.models.Email.send({
      to: 'tauvares@gmail.com',
      from: 'you@gmail.com',
      subject: 'my subject',
      text: 'my text',
      html: 'my <em>html</em>'
    }, function(err, mail) {
      console.log('email sent!');
      //response
      cb(err);
    });
  };
  Guest.remoteMethod(
    'sendEmail', {
      http: {
        path: '/sendEmail',
        verb: 'post'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

  Guest.sendEmailSG = function(cb) {
        // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    var helper = require('sendgrid').mail

    from_email = new helper.Email("test@example.com")
    to_email = new helper.Email("tauvares@gmail.com")
    subject = "Sending with SendGrid is Fun"
    content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js")
    mail = new helper.Mail(from_email, subject, to_email, content)

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode)
      console.log(response.body)
      console.log(response.headers)
    })
  };
  Guest.remoteMethod(
    'sendEmailSG', {
      http: {
        path: '/sendEmailSG',
        verb: 'post'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

Guest.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  Guest.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

};
