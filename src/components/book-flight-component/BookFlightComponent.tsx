import React, { useState } from 'react';
import Axios from 'axios';
import { destinationTypes } from '../../action-mappers/planet-action';
import { Link, Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';


interface IBookFlightState {
    destinations: any
    selectedPlanet: string
    flights: any
    booked: string
    selectedFlight: number
    paid: boolean
    redirect: boolean
    cardNumber: number,
    cardName: string,
    code: number,
    expiration: any,
    invalidPayment: string
}

interface IBookFlightProps {

}

export class BookFlightComponent extends React.Component<IBookFlightProps, IBookFlightState>{

    constructor(props: any) {
        super(props)
        this.state = {
            destinations: [],
            selectedPlanet: '',
            flights: [],
            booked: '',
            selectedFlight: 0,
            paid: false,
            redirect: false,
            cardNumber: 0,
            cardName: '',
            code: 0,
            expiration: Date.now(),
            invalidPayment: ''

        }
    }

    async componentDidMount() {
        this.getFlights();
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/planets')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    destinations: res.data
                })
            }).catch(err => console.log(err)
            )

        
    }

    updateSelection = (event: any) => {

        //const { name, value } = event.target;
        this.setState({
            ...this.state,
            selectedPlanet: event.target.value
        });
    };

    setChosenFlight = (event: any) => {

        //const { name, value } = event.target;
        this.setState({
            ...this.state,
            selectedFlight: event.target.value
        });
        console.log('selected id is: ' + this.state.selectedFlight)
    };

    getFlights = () => {
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    flights: res.data
                })
            })
            .catch(err => console.log(err)
            )
    }

    id: any;

    bookFlight = () => {
        let flight = {
            id: this.state.selectedFlight
        }
        if (this.state.paid) {
            // Axios.put('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights', flight)
            Axios.put("http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights/book/" + this.state.selectedFlight)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        this.setState({ booked: "Booking successful ..... navigating back to dashboard" });
                        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
                    } else {
                        this.setState({ booked: "Booking failed. Please try again" });
                    }
                }).catch(err => {
                    console.log(err);
                    this.setState({ booked: "Booking failed. Please try again" });
                }
                )
        }
    }

    componentWillMount = () => {
        clearTimeout(this.id)
    }

    handleChange = (event: any) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    setPaid = () => {
        if (this.state.cardName.trim() === '' || this.state.cardName.trim() === null) {
            this.setState({ invalidPayment: "Payment failed. Try again" })
        } else
            if (this.state.cardName.length < 35 && this.state.cardNumber.toString.length < 12 && this.state.code.toString.length < 4) {
                this.setState({
                    paid: true,
                    invalidPayment: "Payment Successful",

                    // clear form data
                    cardNumber: 0,
                    cardName: '',
                    code: 0
                })

            }
    }

    displayFlights = () => {
        if (this.state.selectedPlanet) {
            if (this.state.flights.length > 0) {
                return (
                    <div style={{ overflowX: "auto" }}>
                        <h4>Select flights below: </h4>
                        <p> Available flights for {this.state.selectedPlanet}</p>
                        <p>Selected flight: {this.state.selectedFlight}</p>
                        <table className="table table-hover table-borderless table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">flight Id</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Available seats</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Departure</th>
                                    <th scope="col">Destination</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                this.state.flights.length > 0 ?
                                    this.state.flights.filter((flight: any, i: any) => {
                                        if(flight.destination != null)
                                        return flight.destination.planetName === this.state.selectedPlanet

                                    }).map((flight: any, i: any) => {
                                        
                                        return (

                                            flight?
                                            <tr id={i}>
                                                <th scope="row">
                                                    <input type="radio" name="flight" value={flight.id} onClick={this.setChosenFlight}></input>
                                                </th>
                                                <td>{flight.id}</td>
                                                <td>{flight.duration}</td>
                                                <td>${flight.cost}</td>
                                                <td>{flight.availableSeats}</td>
                                                <td>{flight.status}</td>
                                                <td>{flight.departure.planetName}</td>
                                                <td>{flight.destination.planetName}</td>
                                            </tr>
                                            :
                                            ''
                                        )
                                    })
                                    : ''
                                }
                            </tbody>
                        </table>
                    </div>
                )
            } else {
                return (
                    <p style={{ color: "red" }}>No available flights to this destination</p>
                )
            }
        }
    }


    payment = () => {
        return (
            <div>
                <button className="btn" type="button" data-toggle="collapse" data-target="#payment"><strong style={{ color: "red", fontStyle: "italic", fontWeight: 35 }}>Click to pay and book your flight</strong></button>
                <div className="collapse col-10" id="payment" style={{ borderStyle: "solid", borderColor: "black", borderRadius: "25px", padding: "10px" }}>
                    <Form>
                        <FormGroup row>
                            <Label for="number" sm={4}>Card Number</Label>
                            <Col sm={5}>
                                <Input required
                                    type="number"
                                    name="cardNumber"
                                    id="number"
                                    placeholder="enter card number"
                                    value={this.state.cardNumber}
                                    style={{ borderRadius: "25px" }}
                                    onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="expiration" sm={4}>Expiration date</Label>
                            <Col sm={5}>
                                <Input required
                                    type="date"
                                    name="expiration"
                                    id="expiration"
                                    placeholder="enter expiration date"
                                    style={{ borderRadius: "25px" }}
                                    value={this.state.expiration}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={4}>Name on card</Label>
                            <Col sm={5}>
                                <Input required
                                    type="text"
                                    name="cardName"
                                    id="name"
                                    placeholder="enter name"
                                    style={{ borderRadius: "25px" }}
                                    value={this.state.cardName}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="csv" sm={4}>Code</Label>
                            <Col sm={2}>
                                <Input required
                                    type="number"
                                    name="code"
                                    id="csv"
                                    placeholder="CSV"
                                    value={this.state.code}
                                    style={{ borderRadius: "25px" }}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <Button onClick={this.setPaid} disabled=
                            {!(this.state.selectedFlight && this.state.cardName
                                && this.state.cardNumber && this.state.code)}>Pay</Button>
                        <br />
                        <p>{this.state.invalidPayment}</p>
                    </Form>

                </div>
            </div>
        )
    }



    render() {

        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }


        if (this.state.destinations.length) {

            return (
                <div style={{ width: "50%", margin: "auto" }} className="jumbotron">
                    <p>Select destination: <select onChange={this.updateSelection}>
                        <option placeholder="select planet ..."></option>
                        {
                            this.state.destinations.map((planet: any, i: any) => {
                                return <option value={planet.planetName} id={i}>{planet.planetName}</option>
                            })
                        }
                    </select>
                    </p>

                    {this.state.selectedPlanet != null ?
                        <div id="flights">

                            {this.displayFlights()}
                            <br />
                            {this.payment()}
                            <br />
                            <br />
                            <Button color="primary" onClick={this.bookFlight} disabled={!this.state.paid}>Book</Button>
                            <br />
                            <h5 style={{ color: "red" }}>{this.state.booked}</h5>
                            <br />
                            <Link to="/dashboard">Back to dashboard</Link>
                        </div> :
                        <p>Select destination first</p>
                    }

                </div>
            )
        } else {
            return (
                <div>
                    <p>Noop!</p>
                    <Link to="/book">Back to dashboard</Link>
                </div>
            )
        }


        //)
    }

}