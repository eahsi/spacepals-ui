import React from 'react';
import axios from 'axios';

export const register = () =>{
    axios.create({
        baseURL: "http://localhost:8080/spacepals/users"
    })
}

export const registerRequest = async(url:any): Promise<object> =>{

    let userData = {
        firstname: "hello",
        lastname: "hi",
        email: "email"
    }
    axios.post("http://localhost:8080/spacepals/users",
        userData
).then(response =>{
    console.log(response)
})

    return Object;
}