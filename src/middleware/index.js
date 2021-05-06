import thunk from './thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk, logger);
