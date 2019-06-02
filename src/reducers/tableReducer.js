import { LOAD_TABLE_DATA } from '../constants/actionTypes';

export const initialState = {
  loaded: false,
  data: []
}
const tableReducer = (state = initialState, action) => {
 switch (action.type) {

  case LOAD_TABLE_DATA:
    return Object.assign({}, state, {
        ...state,
        loaded: action.payload.loaded,
        data: action.payload.data
    })

  default:
   return state
 }
}

export default tableReducer;
