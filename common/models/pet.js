'use strict';

var log4js = require('log4js');

module.exports = function(Pet) {
 // operational hook for restrct access to the model
 Pet.observe("access", function limitToTenant(ctx, next) {  
    createLogFileForUser().info(' Access PET data source '); // log operations
    if (ctx.query.ownerId){
      var ownerId = ctx.query.ownerId;
      ctx.query.where = ctx.query.where || { ownerId: ownerId }; 
    }
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
