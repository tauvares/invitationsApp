'use strict';

module.exports = function(Guest) {
//{"username":"admin","password":"admin"}
  Guest.sendEmailSG = function(req, cb) {
        // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    var helper = require('sendgrid').mail;
    var fs = require('fs');
    var stringTemplate = fs.readFileSync("../../client/views/emailTemplate.html", "utf8");
/*
    var from_email = new helper.Email("joaos@mpdft.mp.br");
    var to_email = new helper.Email("tauvares@gmail.com");
    var subject = "Sending with SendGrid is Fun";
    var content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
    var mail = new helper.Mail(from_email, subject, to_email, content);
    var sendgridKey = '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';
*/
    var from_email = new helper.Email(req.hostname);
    var to_email = new helper.Email(req.guestname);
    var subject = req.eventname;
    //var content = new helper.Content("text/html", req.eventdescription);
    var content = new helper.Content("text/html", stringTemplate);
    /*
    {
    "hostname":"joaos@mpdft.mp.br",
    "guestname":"tauvares@gmail.com",
    "eventname":"Encontro da rede CEMA de instituições",
    "eventdescription":"Encontro da rede CEMA de instituições, que ocorrerá no dia 08/02/17"
    }
    */
    var mail = new helper.Mail(from_email, subject, to_email, content);
    var sendgridKey = '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';
    var sg = require('sendgrid')(sendgridKey);
    console.log('The sendgrid key is ' + sendgridKey);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    })
  };
  Guest.remoteMethod(
    'sendEmailSG', {
      http: {
        path: '/sendEmailSG',
        verb: 'post'
      },
      accepts: {
        arg: 'req', type: 'object',
        'http': {source: 'body'}
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

};
