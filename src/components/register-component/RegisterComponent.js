import React, { Component } from 'react';
import axios from 'axios'


export class RegisterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            errors: '',
        }

        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        
    }

    submit(event) {
        const {
            email,
            password,
            confirm_password,
            errors
        } = this.state;

        event.preventDefault();
        
        let creds = {
            email: this.state.email.value,
            password: this.state.password.value
        }

        //credsJSON = JSON.stringify(creds)

        //const submitted = axios.post('localhost:3000/register', credsJSON)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
        
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.submit}>
                <input type="email" name="email" 
                   placeholder="Enter a valid email address" 
                   value={this.state.email} 
                   onChange={this.change} required />

                   <input type="password" name="password" 
                   placeholder="Enter your desried password" 
                   value={this.state.password} 
                   onChange={this.change} required />

                   <input type="password" name="confirm_password" 
                   placeholder="confirm your password" 
                   value={this.state.confirm_password} 
                   onChange={this.change} required />

                   <button type="submit">Complete Registration</button>
                </form>
            </div>
        );
    }
}