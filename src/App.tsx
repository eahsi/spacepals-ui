import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import  LoginComponent  from './components/login-component/LoginContainer';
import { ApiComponent } from './components/api-component/ApiComponent';
import DestinationComponent from './components/destinations/DestinationContainer';
import { AboutComponent } from './components/about-us-component/AboutComponent';
import {Register} from './components/register/Register'
import NavbarComponent from './utils/navbar/NavbarContainer';
import  DashboardComponent  from './components/dashboard-component/regular-user/DashboardContainer';
import { RegisterCompanyComponent } from './components/register-company-component/RegisterCompanyComponent';
import  CreateAircraftComponent  from './components/create-aircraft-component/CreateAircraftContainer';
import CreateFlightComponent from './components/create-flight-component/CreateFlightContainer';
import LogoutComponent  from './components/logout-component/LogoutContainer';
import { BookFlightComponent } from './components/book-flight-component/BookFlightComponent';
import  ViewAllFlights  from './components/view-all-flights-component/ViewAllFlightsContainer';

const App: React.FC = () => {
  return (
    
    <div>
      <Provider store={store}>
        
        <Router>
        <NavbarComponent/>
          <Switch>
            <Route path='/book' component = { BookFlightComponent}/>
            <Route path='/ship' component = {CreateAircraftComponent} />
            <Route path = '/planet' component = {DestinationComponent}/>
            <Route path='/flight' component = { CreateFlightComponent}/>
            <Route path='/login' component = { LoginComponent } />
            <Route path = '/dashboard' component = {DashboardComponent}/>
            <Route path='/about' component = { AboutComponent}/>
            <Route path='/registerCompany' component = { RegisterCompanyComponent}/>
            <Route path='/apitest' component = { ApiComponent } />
            <Route path='/view-flights' component = {ViewAllFlights}/>
            <Route path = '/register' component = {Register}/>
            <Route path = '/logout' component = { LogoutComponent}/>
            <Route path = '/' component = {HomeComponent}/>
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;