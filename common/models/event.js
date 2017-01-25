'use strict';

module.exports = function(Event) {
  Event.presence = function(id, cb) {
    cb(null, id);
  };
  Event.remoteMethod('presence', {
    http: {
      path: '/:id/presence',
      verb: 'get'
    },
    accepts: {
      arg: 'id',
      type: 'string',
      required: true
    },
    returns: {
      arg: 'presence',
      type: 'string'
    }
  });

};
