import {
    FETCH_ITEMS,
    GET_DETAIL,
    CLEAN_LIST,
    CLEAN_CATEGORIES,
    CLEAN_DETAIL
} from '../actions/types';

const initialState = {
    searchResult: {
        author:{},
        categories: [],
        items: []
    },
    itemSelected: {
        author:{},
        item: null
    }
}

export default function appReducer(state = initialState, action){
    switch(action.type) {
        case FETCH_ITEMS: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
        case GET_DETAIL: {
            return {
                ...state,
                itemSelected: action.payload
            }
        }
        case CLEAN_DETAIL: {
            return {
                ...state,
                itemSelected: {
                    ...state.itemSelected,
                    item: null
                }
            }
        }
        case CLEAN_CATEGORIES: {
            return {
                ...state,
                searchResult: {
                    ...state.searchResult,
                    categories: []
                }
            }
        }
        case CLEAN_LIST: {
            return {
                ...state,
                searchResult: {
                    ...state.searchResult,
                    items: []
                }
            }
        }
        default:
            return state
    }
}

