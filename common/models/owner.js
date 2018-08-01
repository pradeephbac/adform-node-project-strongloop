'use strict';
var log4js = require('log4js');

module.exports = function(Owner) {
 // operational hook for restrct access to the model
 Owner.observe("access", function limitToTenant(ctx, next) {  
    createLogFileForUser().info(' Access OWNERS data source '); // log operations
   next();
 });
};


//this function will create  log files in side model
function createLogFileForUser() {
    var logger = log4js.getLogger('logs');
    log4js.configure({
      appenders: {
        logs: {
          type: 'file',
          filename: 'logs/task.log'
        }
      },
      categories: {
        default: {
          appenders: ['logs'],
          level: 'info'
        }
      }
    });
    return logger;
}
