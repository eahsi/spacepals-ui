import axios from 'axios'

export const loginClient = axios.create({
    //URL OF OUR JAVA APPLICATION ON EBS
    baseURL: "http://localhost:8080/spacepals/auth"
})
