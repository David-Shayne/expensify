import { GET_ITEMS, ADD_ITEM } from './types';

export const getItems = () => dispatch => {
    dispatch({ type: GET_ITEMS, payload: null });
};

export const addItem = item => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: item
    });
};
