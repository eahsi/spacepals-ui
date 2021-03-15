import { apiLogin } from "../remote/login-clients/login-clients"

export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN'
}

export const updateCurrentUser = (email:string, password:string) => async (dispatch:any) => {
    //let response:any = await apiLogin(email,password)
    const response = await apiLogin(email,password).then((res:any) =>{

    if(res.status === 200) {
        console.log(res);
        
        dispatch({
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser:res.data
            }
        })
    } else {
        dispatch({
            type:loginTypes.UNSUCCESSFUL_LOGIN,
            payload: {
                loginMessage:'Login failed. Try again'
            }
        })
    }

    });
    return response;
}