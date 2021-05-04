import express from 'express';
import { healthcheck } from '../controllers';

const routes = express.Router();
routes.get('/healthcheck', express.json(), healthcheck);

export default routes;
