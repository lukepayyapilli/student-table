import { LOAD_TABLE_DATA, SAVE_SORT_FIELDS } from '../constants/actionTypes';

const initialState = {
  loaded: false,
  data: [],
  fields: []
}

const tableReducer = (state = initialState, action) => {
 switch (action.type) {
  case LOAD_TABLE_DATA:
    return Object.assign({}, state, {
        ...state,
        loaded: action.payload.loaded,
        data: action.payload.data
    })
  case SAVE_SORT_FIELDS:
    return Object.assign({}, state, {
      ...state,
      fields: action.payload.fields
    })
  default:
   return state
 }
}

export default tableReducer;
