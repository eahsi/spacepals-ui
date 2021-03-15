import React from 'react'
import { Redirect } from 'react-router'


interface IDashboardState{
    role:string
}

interface IDashboardProps{
    // currentUser:any
}

export class ManagerDashboard extends React.Component<IDashboardProps, IDashboardState>{

    constructor(props:IDashboardProps){
        super(props)
        this.state = {
            role:''
        }
    }



    render() {
        if(!this.state.role) {
            return(
                <Redirect to='/home'/>
            )
        }
        if(this.state.role == 'FLIGHT_MANAGER') {
            return(
                <Redirect to='/mandash'/> 
            )
        }
        else {
            return (
                <Redirect to='/usedash'/>
            )
        }
    }
}