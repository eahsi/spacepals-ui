import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import { state } from '../../reducers';

interface IRegisterState{
    fname: string
    lname: string
    email: string
    password: string
    registerMessage: string
    counter: number
    action: string
}

interface IRegisterProps{
    registerMessage: string
    register: () => void
}

export class Register extends React.Component<IRegisterProps, IRegisterState>{

    constructor(props:any){
        super(props)
        this.state ={
            fname: '',
            lname: '',
            email: '',
            password: '',
            registerMessage: '',
            counter:0,
            action: ''


        }
    }

    registerUser = (event:any) =>{
        event.preventDefault();
        let userData = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            gender: "LGBTQ"
        }
        axios.post("http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/users",
            userData
    ).then(response =>{
        console.log(response)
        this.setState({
            ...this.state,
            fname:'',
            lname:'',
            email:'',
            password:'',
            action: 'Login'
        })
        this.setState({
            ...state,
            registerMessage: 'Success, continue to ' 
        })
    })
    .catch(err =>{
        console.log(err)
        this.setState({
            registerMessage: 'Registration failed. Please try again later'
        })
    })
    }

    handleInputChange = (event: any) => {
        
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };

    successRegister = ()=>{
        this.setState({
            ...this.state,
            counter: 3
        })
        this.setState({
            ...this.state,
            registerMessage: 'Success. Taking you to login in ' + this.state.counter + ' seconds'
        })

        let timer = () => {
        setTimeout(()=>{
            this.setState({
                ...this.state,
                counter: this.state.counter - 1
            })
        }, 1000)
    }
    if(this.state.counter > 0){
        timer()
        if(this.state.counter === 1) return <Redirect to='/login' />
    }
    }


    render(){
        return (
            <div className= "text-center" style = {{
                margin:"10% 30%"
            }}>
                <div style={{
                background:"inherit",
                outlineWidth:"2px",
                outlineColor:"red",
                color: "white",
                borderStyle: "solid",
                borderColor: "white", 
                borderRadius: "25px"
            }}>
                <h1>Sign up below</h1>
                <br/>
        <h5 style= {{color: "red"}}>{this.state.registerMessage}<Link to = "/login"> {this.state.action}</Link></h5>
                <br/>
                <Form onSubmit={this.registerUser}>
                    <FormGroup row>
                        <Label for="fname" sm={3}>First name</Label>
                        <Col sm={8}>
                            <Input required
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="First name"
                                value={this.state.fname}
                                onChange={this.handleInputChange} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="lname" sm={3}>Last name</Label>
                        <Col sm={8}>
                            <Input required
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Your last name"
                                value={this.state.lname}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={3}>Email</Label>
                        <Col sm={8}>
                            <Input required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={3}>Password</Label>
                        <Col sm={8}>
                            <Input required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <Button color="primary"
                    disabled={!(this.state.fname && this.state.lname && this.state.email && this.state.password)}
                    >Register</Button>
                </Form>
                </div>
            </div>
        )
    }

}