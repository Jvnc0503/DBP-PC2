import axios from 'axios';

//Link to deployed backend
const URL = "http://18.117.176.220/api"

function saveToken(token){
    localStorage.setItem('token', token);
    console.log(token);
}

function getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
}

export const fetchLogin = async(body) =>{
    const response = await axios.post(`${URL}/auth/login`, body);
    saveToken(response.data.access_token);
    return response.data;
}

export const fetchRegister = async(body) =>{
    const response = await axios.post(`${URL}/auth/register`, body);
    return response.data;
}

export const fetchRegisterProduct = async(body) =>{
    const response = await axios.post(`${URL}/products`, body, {
        headers: {
            Authorization: `bearer ${getToken()}`,
        }
    });
    return response.data;
}

export const fetchReadProducts = async(skip, limit) =>{
    const response = await axios.get(`${URL}/products?skip=${skip}&limit=${limit}`, {
        headers: {
            Authorization: `bearer ${getToken()}`,
        }
    });
    return response.data;
}

export const fetchReadProduct = async(id) =>{
    const response = await axios.get(`${URL}/products/${id}`, {
        headers: {
            Authorization: `bearer ${getToken()}`,
        }
    });
    return response.data;
}

export const fetchUpdateProduct = async(id, body) =>{
    const response = await axios.put(`${URL}/products/${id}`, body, {
        headers: {
            Authorization: `bearer ${getToken()}`,
        }
    });
    return response.data;
}

export const fetchDeleteProduct = async(id) =>{
    const response = await axios.delete(`${URL}/products/${id}`, {
        headers: {
            Authorization: `bearer ${getToken()}`,
        }
    });
    return response.data;
}