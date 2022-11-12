import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import environment from './environment';
import router from './routes/routes';
import { getLogger } from './utils/logger';

const logger = getLogger('index');

const PORT = environment.PORT;

const app = express();

// Enable cors
app.use(cors());
logger.info('CORS enabled');

// Rate limititing
if (environment.ratelimiting?.enabled) {
  const limiterConfig = {
    windowMs: environment.ratelimiting.INTERVAL, // 10 min
    max: environment.ratelimiting.MAX_REQUEST // number of request in above time
  };
  
  const limiter = rateLimit(limiterConfig);

  app.use(limiter);
  app.set('trust proxy', 1);

  logger.info(
    `Rate limit set to ${limiterConfig.max} every ${limiterConfig.windowMs} ms`
  );
}

// Routes
app.use('/api', router);

app.listen(PORT, () => {
  // Server startup
  logger.info(`Server running on port ${PORT}`);
});
