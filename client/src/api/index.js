import axios from 'axios';

export const getItems = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/items?q=${query}`)
            .then(res =>{
                resolve(res.data);
            })
            .catch(err =>{
                reject(err);
            })
    })
}

export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/items/${id}`)
            .then(res =>{
                resolve(res.data);
            })
            .catch(err =>{
                reject(err);
            })
    })
}