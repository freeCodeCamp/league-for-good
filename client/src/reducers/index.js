import { combineReducers } from 'redux';
import authReducer from './auth';
import menuReducer from './menu';

const rootReducer = combineReducers({
	auth: authReducer,
	menu: menuReducer
});

export default rootReducer;
