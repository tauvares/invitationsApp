'use strict';

module.exports = function(Guest) {
//{"username":"admin","password":"admin"}
  Guest.sendEmailSG = function(req, cb) {
        // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    var helper = require('sendgrid').mail;
    //var fs = require('fs');
    //var stringTemplate = fs.readFileSync("emailTemplate.html", "utf8");

    var stringTemplate = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" data-dnd="true">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body {
          color: #9B9B9B;
        }
        body a {
          color: #0070CD;
          text-decoration: none;
        }
        p {
          margin: 0;
          padding: 0;
        }
        table[class="wrapper"] {
          width: 100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img[class="max-width"] {
          max-width: 100% !important;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table[class="wrapper-mobile"] {
            width: 100% !important;
            table-layout: fixed;
          }
          img[class="max-width"] {
            height: auto !important;
          }
          a[class="bulletproof-button"] {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          // 2 columns
          #templateColumns {
            width: 100% !important;
          }
          .templateColumnContainer {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      </style>
      <style>
        body,
        p,
        div {
          font-family: helvetica, arial, sans-serif;
        }
      </style>
      <style>
        body,
        p,
        div {
          font-size: 15px;
        }
      </style>
    </head>
    <body yahoofix="true" style="min-width: 100%; margin: 0; padding: 0; font-size: 15px; font-family: helvetica,arial,sans-serif; color: #9B9B9B; background-color: #FFFFFF; color: #9B9B9B;" data-attributes='%7B%22dropped%22%3Atrue%2C%22bodybackground%22%3A%22%23FFFFFF%22%2C%22bodyfontname%22%3A%22helvetica%2Carial%2Csans-serif%22%2C%22bodytextcolor%22%3A%22%239B9B9B%22%2C%22bodylinkcolor%22%3A%22%230070CD%22%2C%22bodyfontsize%22%3A15%7D'>
      <center class="wrapper">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
            <tr>
              <td valign="top" bgcolor="#FFFFFF" width="100%">
                <table width="100%" role="content-container" class="outer" data-attributes='%7B%22dropped%22%3Atrue%2C%22containerpadding%22%3A%220%2C0%2C0%2C0%22%2C%22containerwidth%22%3A600%2C%22containerbackground%22%3A%22%23FFFFFF%22%7D' align="center" cellpadding="0"
                    cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                              <tr>
                                <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #9B9B9B; text-align: left;" bgcolor="#FFFFFF" width="100%" align="left">
                                  <table role="module" data-type="image" border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" class="wrapper" data-attributes='%7B%22child%22%3Afalse%2C%22link%22%3A%22%22%2C%22width%22%3A%22300%22%2C%22height%22%3A%2253%22%2C%22imagebackground%22%3A%22%23FFFFFF%22%2C%22url%22%3A%22https%3A//marketing-image-production.s3.amazonaws.com/uploads/e67c4dfd9e88d10b2e5dc66279cfd575a514c4aa921d85c1a15a7b3420d49ae02fe7cfe98c37a75126e97512d8d08a61e92899b3a64bb85435619fcee91464de.png%22%2C%22alt_text%22%3A%22%22%2C%22dropped%22%3Atrue%2C%22imagemargin%22%3A%2251%2C0%2C51%2C0%22%2C%22alignment%22%3A%22center%22%2C%22responsive%22%3Atrue%7D'>
                                    <tr>
                                      <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding: 51px 0px 51px 0px;" valign="top" align="center" role="module-content">
                                          <img class="max-width" width="300" height="" src="../images/invitationsAppLogoMini.png" alt=""
                                              border="0" style="display: block; color: #000; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px;  max-width: 300px !important; width: 100% !important; height: auto !important; " />
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-attributes='%7B%22dropped%22%3Atrue%2C%22child%22%3Afalse%2C%22padding%22%3A%2234%2C5%2C34%2C5%22%2C%22containerbackground%22%3A%22%23ffffff%22%7D'>
                                    <tr>
                                      <td role="module-content" valign="top" height="100%" style="padding: 34px 5px 34px 5px;" bgcolor="#ffffff">
                                        <div style="text-align: center;"><span style="color:#FF6666;"><span style="font-size:22px;">{{email.eventname}}</span></span>
                                        </div>
                                        <div>&nbsp;</div>
                                        <div style="text-align: center;">{{email.eventdescription}}</div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="module" role="module" data-type="button" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-attributes='%7B%22dropped%22%3Atrue%2C%22borderradius%22%3A8%2C%22buttonpadding%22%3A%2212%2C12%2C12%2C12%22%2C%22text%22%3A%22CONFIRM%2520PRESENCE%22%2C%22alignment%22%3A%22center%22%2C%22fontsize%22%3A16%2C%22url%22%3A%22%22%2C%22height%22%3A%22%22%2C%22width%22%3A250%2C%22containerbackground%22%3A%22%23ffffff%22%2C%22padding%22%3A%220%2C0%2C51%2C0%22%2C%22buttoncolor%22%3A%22%23FF6666%22%2C%22textcolor%22%3A%22%23ffffff%22%2C%22bordercolor%22%3A%22%23FF6666%22%7D'>
                                    <tr>
                                      <td style="padding: 0px 0px 51px 0px;" align="center" bgcolor="#ffffff">
                                        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile">
                                          <tr>
                                            <td align="center" style="-webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px; font-size: 16px;" bgcolor="#FF6666">
                                              <a href="" class="bulletproof-button" target="_blank" style="height: px; width: 250px; font-size: 16px; line-height: px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; padding: 12px 12px 12px 12px; text-decoration: none; color: #ffffff; text-decoration: none; -webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px; border: 1px solid #FF6666; display: inline-block;">CONFIRM CONFIRMAR</a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-attributes='%7B%22dropped%22%3Atrue%2C%22spacing%22%3A2%2C%22containerbackground%22%3A%22%23FF6666%22%7D'>
                                    <tr>
                                      <td role="module-content" style="padding: 0px 0px 2px 0px;" bgcolor="#FF6666"></td>
                                    </tr>
                                  </table>
                                  <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-attributes='%7B%22dropped%22%3Atrue%2C%22spacing%22%3A2%2C%22containerbackground%22%3A%22%23FF6666%22%7D'>
                                    <tr>
                                      <td role="module-content" style="padding: 0px 0px 2px 0px;" bgcolor="#FF6666"></td>
                                    </tr>
                                  </table>
                                  <table role="module" data-type="image" border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" class="wrapper" data-attributes='%7B%22child%22%3Afalse%2C%22link%22%3A%22%22%2C%22width%22%3A%22300%22%2C%22height%22%3A%2253%22%2C%22imagebackground%22%3A%22%23FFFFFF%22%2C%22url%22%3A%22https%3A//marketing-image-production.s3.amazonaws.com/uploads/e67c4dfd9e88d10b2e5dc66279cfd575a514c4aa921d85c1a15a7b3420d49ae02fe7cfe98c37a75126e97512d8d08a61e92899b3a64bb85435619fcee91464de.png%22%2C%22alt_text%22%3A%22%22%2C%22dropped%22%3Atrue%2C%22imagemargin%22%3A%2236%2C0%2C23%2C0%22%2C%22alignment%22%3A%22center%22%2C%22responsive%22%3Atrue%7D'>
                                    <tr>
                                      <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding: 36px 0px 23px 0px;" valign="top" align="center" role="module-content">
                                        <img class="max-width" width="300" height="" src="../images/invitationsAppLogoMini.png" alt=""
                                            border="0" style="display: block; color: #000; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px;  max-width: 300px !important; width: 100% !important; height: auto !important; " />
                                      </td>
                                    </tr>
                                  </table>
                                  <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="module footer" role="module" data-type="footer" data-attributes='%7B%22dropped%22%3Atrue%2C%22columns%22%3A%221%22%2C%22padding%22%3A%2210%2C5%2C90%2C5%22%2C%22containerbackground%22%3A%22%23ffffff%22%7D'>
                                    <tr>
                                      <td style="padding: 10px 5px 90px 5px;" bgcolor="#ffffff">
                                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                                          <tr role="module-content">
                                            <td align="center" valign="top" width="100%" height="100%" class="templateColumnContainer">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                <tr>
                                                  <td class="leftColumnContent" role="column-one" height="100%" style="height:100%;">
                                                    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-attributes='%7B%22dropped%22%3Atrue%2C%22child%22%3Afalse%2C%22padding%22%3A%220%2C0%2C0%2C0%22%2C%22containerbackground%22%3A%22%23ffffff%22%7D'>
                                                      <tr>
                                                        <td role="module-content" valign="top" height="100%" style="padding: 0px 0px 0px 0px;" bgcolor="#ffffff">
                                                          <div style="font-size:10px;line-height:150%;margin:0;text-align:center;">{{email.hostname}}</div>
                                                          <div style="font-size:10px;line-height:150%;margin:0;text-align:center;">{{email.hostaddress}}</div>
                                                          <div>&nbsp;</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                              </tr>
                              </td>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
            </tr>
            </td>
          </table>
        </div>
      </center>
    </body>
    </html>';
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
