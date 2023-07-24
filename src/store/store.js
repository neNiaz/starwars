import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    setLocalStorage('store', store.getState().favouriteReducer);
});

export default store;
