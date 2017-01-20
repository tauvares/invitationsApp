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
