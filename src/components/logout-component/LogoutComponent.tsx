import React from 'react'
// import { Redirect } from 'react-router'
// import Axios from 'axios'

interface ILogoutState {

}

interface ILogoutProps {

}

export class LogoutComponent extends React.Component<ILogoutProps, ILogoutState> {

    constructor(props:ILogoutProps) {
        super(props)

    }

    componentDidMount() {
        // Axios.get('http://localhost:8080/spacepals/auth').then(res => {
        //      console.log(res);
        // })
        window.location.replace('http://project-two-ui.s3-website.us-east-2.amazonaws.com/')
    }

    // refresh = () => {
    //     Axios.get('http://localhost:8080/spacepals/auth').then(res => {
    //         console.log(res);
    //     })
    //     window.location.href = 'http://localhost:3000/home'
    //     return 1
    // }

    render() {
        return (
            <></>
        )
    }
}