import { GET_ITEMS, ADD_ITEM } from '../actions/types';

const initialState = {
    items: [
        { name: 'Macdonalds', value: -623, category: 'food' },
        { name: 'Uber', value: -130, category: 'travel' },
        { name: 'Income', value: 20000, category: 'deposit' },
        { name: 'Nike', value: -1400, category: 'shopping' }
    ]
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [action.payload, ...state.items] };

        case GET_ITEMS:
            return state;

        default:
            return state;
    }
};

export default itemReducer;
