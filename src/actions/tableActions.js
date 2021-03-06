import { LOAD_TABLE_DATA, SAVE_SORT_FIELDS } from '../constants/actionTypes';
import tableService from '../services/tableService';
const url = 'http://5c914145c6354a001403774b.mockapi.io/students';
const method = 'get';

export const loadTableData = (dispatch) => {
  return tableService.loadTableData(url, method).then(res => {
    dispatch({
      type: LOAD_TABLE_DATA,
      payload: {
        loaded: true,
        data: res
      }
    })
  })
}

export const saveSortFields = (dispatch, fields) => {
  return dispatch({
    type: SAVE_SORT_FIELDS,
    payload: {
      fields: fields
    }
  })
}
