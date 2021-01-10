import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import merchantsMiddleware from './middleware/merchants.middleware';
import userMiddleware from './middleware/user.middleware';

import reducerRoot from './reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    merchantsMiddleware,
    userMiddleware,
  ),
);

const store = createStore(reducerRoot, enhancers);

export default store;
