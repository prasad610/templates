import { isProduction } from './utils/utils';

const COMMON_PROPERTIES = {
  PORT: 5000,
  ratelimiting: {
    enabled: false,
    MAX_REQUEST: 5, // number of request allowed in below time
    INTERVAL: 10 * 60 * 1000 // 10 min
  },
  log: {
    LOG_FILE_PATH: 'application.log'
  }
};

const DEV_PROPERTIES = {
  ...COMMON_PROPERTIES
};

const PROD_PROPERTIES = {
  ...COMMON_PROPERTIES
};

/* eslint-disable */
const getEnv = () => {
  if (isProduction) {
    return DEV_PROPERTIES;
  } else {
    return PROD_PROPERTIES;
  }
};

export default getEnv();
