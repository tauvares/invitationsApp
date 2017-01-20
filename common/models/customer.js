'use strict';

module.exports = function(Customer) {
  //Customer.disableRemoteMethod("create", true);
  //Customer.disableRemoteMethod("upsert", true);
  //Customer.disableRemoteMethod("updateAll", true);
  //Customer.disableRemoteMethod("updateAttributes", false);

  //Customer.disableRemoteMethod("find", true);
  //Customer.disableRemoteMethod("findById", true);
  Customer.disableRemoteMethod("findOne", true);

  //Customer.disableRemoteMethod("deleteById", true);

  //Customer.disableRemoteMethod("confirm", true);
  Customer.disableRemoteMethod("count", true);
  Customer.disableRemoteMethod("exists", true);
  Customer.disableRemoteMethod("resetPassword", true);

  Customer.disableRemoteMethod('__count__accessTokens', false);
  Customer.disableRemoteMethod('__create__accessTokens', false);
  Customer.disableRemoteMethod('__delete__accessTokens', false);
  Customer.disableRemoteMethod('__destroyById__accessTokens', false);
  Customer.disableRemoteMethod('__findById__accessTokens', false);
  Customer.disableRemoteMethod('__get__accessTokens', false);
  Customer.disableRemoteMethod('__updateById__accessTokens', false);

  Customer.disableRemoteMethod('createChangeStream', true);


};
