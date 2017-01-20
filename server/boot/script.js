module.exports = function (app) {
  var mongoDB = app.dataSources.mongoDS;
  mongoDB.autoupdate('Customer', function (err) {
    if (err) throw (err);
    var Customer = app.models.Customer;
    Customer.find({ where: { username: 'admin' }, limit: 1 }, function (err, users) {
      if (users.length == 0) {
        Customer.create([
          { username: 'admin', email: 'admin@admin.com', password: 'admin', admin: true }
        ], function (err, users) {
          if (err) return debug(err);

          var Role = app.models.Role;
          var RoleMapping = app.models.RoleMapping;

          Role.destroyAll();
          RoleMapping.destroyAll();

          //create the admin role
          Role.create({
            name: 'admin'
          }, function (err, role) {
            if (err) return debug(err);

            //make admin
            role.principals.create({
              principalType: RoleMapping.USER,
              principalId: users[0].id
            }, function (err, principal) {
              if (err) throw (err);
            });
          });
        })
      }
      else {
      }
    });
  });

};
