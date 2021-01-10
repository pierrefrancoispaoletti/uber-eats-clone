import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import merchantsMiddleware from './middleware/merchants.middleware';

import reducerRoot from './reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    merchantsMiddleware,
  ),
);

const store = createStore(reducerRoot, enhancers);

export default store;
