'use strict';

module.exports = function(Guest) {
//{"username":"admin","password":"admin"}
  Guest.sendEmailSG = function(req, cb) {
        // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    var helper = require('sendgrid').mail;
    //var fs = require('fs');
    //var stringTemplate = fs.readFileSync("emailTemplate.html", "utf8");

    var stringTemplate =
    '<style>a[class="bulletproof-button"] {'+
    '  display: block !important;'+
    '  width: auto !important;'+
    '  font-size: 80%;'+
    '  padding-left: 0 !important;'+
    '  padding-right: 0 !important;'+
    '}</style>'+

    '<H1>InvitationsApp</H1>'+
    '<H3>' + req.eventname + '</H3>'+
    '<p>' + req.eventdescription + '</p>'+
    '<td align="center" style="-webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px; font-size: 16px;" bgcolor="#FF6666">'+
      '<a href="" class="bulletproof-button" target="_blank" style="height: px; width: 250px; font-size: 16px; line-height: px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; padding: 12px 12px 12px 12px; text-decoration: none; color: #ffffff; text-decoration: none; -webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px; border: 1px solid #FF6666; display: inline-block;">CONFIRM CONFIRMAR</a>'+
    '</td>'
    '<HR>'+
    '<H1>InvitationsApp</H1>'+
    '<H4>' + req.hostname + '</H4>'+
    '<H4>' +req.hostaddress + '</H4>'+
    '<H4>' +req.hostphone + '</H4>';

    var from_email = new helper.Email(req.hostemail);
    var to_email = new helper.Email(req.guestemail);
    var subject = req.eventname;
    //var content = new helper.Content("text/html", req.eventdescription);
    var content = new helper.Content("text/html", stringTemplate);
    /*
    {
    "hostname":"João Tavares",
    "hostemail":"tauvares@gmail.com",
    "guestname":"filho segundo",
    "guestemail":"joaos@mpdft.mp.br",
    "eventname":"Encontro da rede CEMA de instituições",
    "eventdescription":"Encontro da rede CEMA de instituições, que ocorrerá no dia 08/02/17"
    "hostaddress":"ED SEDE DO MPDFT",
    "hostphone":"3343-9500",
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
