import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import Axios from 'axios';
import { Redirect } from 'react-router';


interface ICreateAircraftProps {
    currentUser: any
}

export class CreateAircraftComponent extends React.Component<ICreateAircraftProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            size: '',
            cid: 0,
            successMessage: '',
            redirect: false
        }

    }

    updateSize = (event: any) => {
        this.setState({
            ...this.state,
            size: event.target.value
        })
    }

    updateName = (event: any) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    updateID = (event: any) => {
        this.setState({
            ...this.state,
            cid: event.target.value
        })
    }

    submitShip = (event: SyntheticEvent) => {
        event.preventDefault()
        // let aircraft = {
        //     name: this.state.name,
        //     capacity: this.state.size
        // }
        let shipdto = {
            name: this.state.name,
            capacity: this.state.size,
            companyId: this.state.cid
        }
        console.log(shipdto)
        Axios.post('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/aircrafts', shipdto).then(res => {
            console.log(res);
            this.setState({
                ...this.state,
                successMessage: 'Ship added successfully',
                redirect: true,
                name: '',
                size: '',
                cid: 0
            })

        }).catch(err => {
            console.log(err);

            this.setState({
                ...this.state,
                successMessage: 'Failed to add spaceship. Try again'
            })
        })
    }

    companiesDisplay = () => {
        //if (this.props.currentUser.companies.length) {
            this.props.currentUser.companies.map((comp: any) => {
                return <option key={comp.id} value={comp.id}>{comp.name}</option>
                //console.log(comp.name)
                
            })
        // }else{
        //     return <option>..........</option>
        // }
    }


    render() {
        if (this.props.currentUser === null) return <Redirect to="/" />
        if (this.props.currentUser.companies.length) {

            return (
                <div>
                    {/* <SpaceNav/> */}
                    <div style={{
                        margin: "10% 30%"
                    }}>
                        <div style={{
                            background: "dark",
                            outlineWidth: "2px",
                            outlineColor: "black",
                            color: "white",
                            padding: "20px",
                        }}>
                            <h1>Create your Ship</h1>
                            <br></br>
                            <br></br>
                            <Form onSubmit={this.submitShip}>
                                <FormGroup row>
                                    <Label for="exampleShipname" sm={2}>Ship Name</Label>
                                    <Col sm={10}>
                                        <Input required
                                            type="text"
                                            name="shipname"
                                            id="exampleShipname"
                                            placeholder="put ship name here"
                                            value={this.state.name}
                                            onChange={this.updateName} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="companyID" sm={2}>Company ID</Label>
                                    {/* <Col sm={10}>
                                        <Input required
                                            type="number"
                                            name="companyID"
                                            id="exampleCompanyID"
                                            placeholder="company id"
                                            value={this.state.cid}
                                            onChange={this.updateID} />
                                            <Label for="exampleDeparture" sm={2}>Departing</Label> */}
                                    <Col sm={10}>
                                        <select onChange={this.updateID}>
                                            <option>Select company ...</option>
                                            {
                                                this.props.currentUser.companies.map((comp: any) => {
                                                    return <option key={comp.id} value={comp.id}>{comp.name}</option>
                                                    //console.log(comp.name)
                                                    
                                                })
                                            }
                                        </select>
                                    </Col>
                                    {/* </Col> */}
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="size" sm={2}>Capacity</Label>
                                    <Col sm={10}>
                                        <Input required
                                            type="select"
                                            name="size"
                                            id="exampleSelect"
                                            value={this.state.size}
                                            onChange={this.updateSize} >
                                            <option value = "SMALL">SMALL</option>
                                            <option value = "MEDIUM">MEDIUM</option>
                                            <option value = "LARGE">LARGE</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <Button color="primary">Create Ship</Button>
                            </Form>
                            <p>{this.state.successMessage}</p>
                            <p>size: {this.state.size}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <Redirect to="/registerCompany" />
                </>
            )
        }
    }
}