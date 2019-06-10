
import { combineReducers } from 'redux';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
 tableData: tableReducer
});

export default rootReducer;
