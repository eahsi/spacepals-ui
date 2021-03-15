import React from 'react';

import {ManagerDashboard} from './managers/ManagerDashboard';
import {DashboardComponent} from './regular-user/DashboardComponent';
import { Redirect } from 'react-router';

// this file will track user roles and render dashboards accordingly.
// if a user is a company manager, the dashboard rendered should be imported from managers folder and vice versa

interface IDashboardState {
}

interface IDashboardProps {
    currentUser: any;
    
}

export class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props:IDashboardProps){
        super(props)
    }

    render(){

        console.log(this.props.currentUser)
        if(!this.props.currentUser)
            return <Redirect to='/login'/>
        if(this.props.currentUser.role === "Flight_Manager")
            return <Redirect to='/mandash'/>
        else return <Redirect to='/userdash'/>
    }


}