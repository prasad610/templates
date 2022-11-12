import apiCache from 'apicache';
import express from 'express';
import needle from 'needle';
import url from 'url';
import { getLogger } from '../utils/logger';

const logger = getLogger('Routes');

const router = express.Router();

// Initialize cache
const cache = apiCache.middleware;

// To access this url make a HTTP get call to api/test
router.get('/getMethodUrl', cache('2 min'), async (req, res) => {
  try {
    const search = url.parse(req.url, true).search;
    if (search != null) {
      const params = new URLSearchParams(search);
    }
    const apiResponse = await needle('get', 'url?${params}', {});
    const resBody = apiResponse.body;
    res.status(200).json(resBody);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
});

router.get('/test', (req, res) => {
  logger.info('Testing info logs');
  logger.warn('Testing warnings logs');
  logger.error('Testing errors logs');
  res.json({ message: 'Requests Completed' });
});

export default router;
