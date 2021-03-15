import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import SpaceNav from '../../utils/navbar/Navbar'
import Axios from 'axios'
import { Redirect } from 'react-router'
interface newFlightState {
    planetbody: []
    aircraftbody: [],
    selectedDestId: any,
    selectedDeptId: any,
    aircraftId: any,
    cost: any,
    redirect: boolean,
    successMessage: string
}
interface newFlightProps {
    currentUser: any
}
export class CreateFlightComponent extends React.Component<newFlightProps, newFlightState> {
    constructor(props: any) {
        super(props)
        this.state = {
            aircraftbody: [],
            planetbody: [],      //company id
            aircraftId: '',      //ship id
            selectedDeptId: '',    //departure
            selectedDestId: '',    //destination
            cost: '',     //cost
            redirect: false,
            successMessage: ''
        }
    }
    updateAircraftId = (event: any) => {
        this.setState({
            ...this.state,
            aircraftId: event.target.value
        })
    }
    async componentDidMount() {
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/planets')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    planetbody: res.data
                })
            }).catch(err => console.log(err)
            )




    }


    updateSelectedDeptId = (event: any) => {
        this.setState({
            ...this.state,
            selectedDeptId: event.target.value
        })
    }
    updateSelectedDestId = (event: any) => {
        this.setState({
            ...this.state,
            selectedDestId: event.target.value
        })
    }
    updateCost = (event: any) => {
        this.setState({
            ...this.state,
            cost: event.target.value
        })
    }
    submitFlight = (event: SyntheticEvent) => {
        event.preventDefault()
        let flight = {
            //departure:this.state.dept,
            //destination:this.state.dest,
            cost: this.state.cost
        }
        let flightdto = {
            cost: this.state.cost,
            selectedDeptId: this.state.selectedDeptId,
            selectedDestId: this.state.selectedDestId,
            aircraftId: this.state.aircraftId
        }
        console.log(flightdto)
        Axios.post('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights', flightdto).then(res => {
            console.log(res);
            this.setState({
                ...this.state,
                successMessage: "Success!",
                redirect: true              
            })
        }).catch((err)=>{
            this.setState({
                ...this.state,
                successMessage: "Scheduling failed. Please try again"
            })
        })
    }
    render() {
        if(this.state.redirect) return <Redirect to = "/dashboard"/>
        if(this.props.currentUser === null) return <Redirect to ="/login"/>
        return (
            <div>
                {/* <SpaceNav/> */}
                <div style={{
                    margin: "10% 30%"
                }}>
                    <div style={{
                        backgroundColor: "black",
                        outlineWidth: "2px",
                        outlineColor: "black", color: "white", padding: "20px"
                    }}>
                        <h1>Please Set Your Flight Parameters.</h1>
                        <br></br>
                        <br></br>
                        <Form onSubmit={this.submitFlight}>
                        
                            <FormGroup row>
                                <Label for="exampleSid" sm={2}>Select an Aircraft</Label>
                                <Col sm={10}>
                                    <select onChange={this.updateAircraftId} required>
                                        <option placeholder="select aircraft ..."></option>
                                        {
                                            this.props.currentUser.companies[0].aircrafts.map((aircraft: any, i: any) => {
                                                return <option value={aircraft.id} id={i}>{aircraft.name} The Flight capacity is:{aircraft.capacity}</option>
                                            })})
                                    }
                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Departure" sm={2}>Departure Planet</Label>
                                <Col sm={10}>
                                    <select onChange={this.updateSelectedDeptId} required>
                                        <option placeholder="Select Departure Planet ..."></option>
                                        {
                                            this.state.planetbody.map((planet: any, i: any) => {
                                                return <option value={planet.id} id={i}>{planet.planetName}</option>
                                            })
                                        }
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Destination" sm={2}>Destination Planet</Label>
                                <Col sm={10}>
                                    <select onChange={this.updateSelectedDestId} required>
                                        <option placeholder="Select Destination Planet ..."></option>
                                        {
                                            this.state.planetbody.map((planetdest: any, i: any) => {
                                                return <option value={planetdest.id} id={i}>{planetdest.planetName}</option>
                                            })
                                        }
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleCost" sm={2}>Cost</Label>
                                <Col sm={10}>
                                    <Input required
                                        type="number"
                                        name="cost"
                                        id="exampleCost"
                                        placeholder="Set the Flight Cost"
                                        value={this.state.cost}
                                        onChange={this.updateCost} />
                                </Col>
                            </FormGroup>
                            <Button color="primary">Create Flight</Button>
                        </Form>
                        <p>{this.state.successMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}