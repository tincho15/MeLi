
import {getItems, getItem} from '../api';
import {
    FETCH_ITEMS,
    GET_DETAIL,
    CLEAN_LIST,
    CLEAN_CATEGORIES,
    CLEAN_DETAIL
} from './types';

export function searchItems(query){
    return (dispatch) => {
        getItems(query)
            .then(res => {
                dispatch({
                    type: FETCH_ITEMS,
                    payload: res
                })
            })
            .catch(err => console.log(err))
    }
};

export function getItemDetail(id){
    return (dispatch) => {
        getItem(id)
            .then(res => {
                dispatch({
                    type: GET_DETAIL,
                    payload: res
                })
            })
            .catch(err => console.log(err))
    }
};

export function cleanList(){
    return (dispatch) => {
        dispatch({
            type: CLEAN_LIST
        })
    }
}

export function cleanCategories(){
    return (dispatch) => {
        dispatch({
            type: CLEAN_CATEGORIES
        })
    }
}

export function cleanDetail(){
    return (dispatch) => {
        dispatch({
            type: CLEAN_DETAIL
        })
    }
}