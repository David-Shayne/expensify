import { GET_ITEMS, ADD_ITEM, GET_TOTAL } from '../actions/types';

const initialState = {
    items: [
        { name: 'Macdonalds', value: -623, category: 'food' },
        { name: 'Uber', value: -130, category: 'travel' },
        { name: 'Income', value: 20000, category: 'deposit' },
        { name: 'Nike', value: -1400, category: 'shopping' }
    ],
    total: 0
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case GET_ITEMS:
            return { ...state };

        case GET_TOTAL:
            return { ...state, total: 100 };
        default:
            return state;
    }
};

export default itemReducer;
