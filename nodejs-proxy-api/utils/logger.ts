import { isProduction } from './utils';
import environment from '../environment';
import log4js from 'log4js';

export const getLogger = (filename: string): log4js.Logger => {
  const config = {
    appenders: {
      file: {
        type: 'file',
        filename: environment.log.LOG_FILE_PATH,
        layout: {
          type: 'pattern',
          pattern: '[%x{myTime}] [%p] %c - %m',
          tokens: {
            myTime: function (logEvent) {
              return logEvent.startTime.toISOString();
            }
          }
        }
      },
      console: {
        type: 'stdout',
        filename: environment.log.LOG_FILE_PATH,
        layout: {
          type: 'pattern',
          pattern: '[%x{myTime}] [%p] %c - %m',
          tokens: {
            myTime: function (logEvent) {
              return logEvent.startTime.toISOString();
            }
          }
        }
      }
    },
    categories: { default: { appenders: ['file'], level: 'error' } }
  };

  if (!isProduction) {
    config.categories.default.appenders.push('console');
  }

  log4js.configure(config);

  const logger = log4js.getLogger(filename);
  logger.level = 'debug';
  return logger;
};
