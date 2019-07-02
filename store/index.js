import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducers,
    applyMiddleware(thunk)
  );
}
