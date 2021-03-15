import React, { SyntheticEvent } from 'react';
import { Table, Navbar, Form, Button } from 'reactstrap';
import axios from 'axios';
import { getFlights } from '../../remote/get-flights/get-all-flights';
import Axios from 'axios';

interface IFlightState {
    //body: any
    check: String
    flights: any
}

interface IFlightProps {
    allFlights: any[]
    getAllFlights: () => void
}

export class ViewAllFlights extends React.Component<IFlightProps, IFlightState> {
    constructor(props: any) {
        super(props);

        this.state = {
            //body: null,
            check: "",
            flights: []

        };
    }

    // async componentDidMount() {
    //     if (this.props.allFlights.length === 0) {
    //         this.props.getAllFlights()
    //     }
    // }

    // aysnc getAll() {
    //     const res = await axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights')
    //     const data = res.data
    //         console.log(res);
    //         console.log(res.data);
    //         console.log(this.props)
    //         this.setState({
    //             allFlights:data
    //         })
    //         return res;
    //     }

    async componentDidMount() {
        // let body1 = await getFlights()
        // console.log(body1);
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights').then((res) => {
            console.log(res.data);
            this.setState({
                ...this.state,
                flights: res.data
        }
        )
        // this.setState({
        //     ...this.state,
        //     flights: body1
            //body: body1
        })
    }

    displayFlights = () => {
        if(this.state.flights.length != 0){
            if (this.state.flights.length > 0) {
                return (
                    <div style={{ overflowX: "auto" ,
                    width: "80%", borderRadius: "20px",
                    margin: "auto", paddingTop: "20px"
                    
                    }}>
                        <table className="table table-hover table-borderless table-dark">
                            <thead>
                                <tr>
                                   
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
                                    this.state.flights.map((flight: any, i: any) => {
                                        return (
                                            <tr id={i}>
                                            
                                                <td>{flight.id}</td>
                                                <td>{flight.duration}</td>
                                                <td>${flight.cost}</td>
                                                <td>{flight.availableSeats}</td>
                                                <td>{flight.status}</td>
                                                {
                                                    flight.departure != null ?
                                                    <td>{flight.departure.planetName}</td>
                                                    : <p>N/A</p>
                                                }
                                                {
                                                    flight.destination != null ?
                                                    <td>{flight.destination.planetName}</td>
                                                    : <p>N/A</p>
                                                }
                                                {/* <td>{flight.destination_planet_id}</td> */}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            } else {
                return (
                    <p style={{ color: "red" }}>No available flights. Check again later</p>
                )
            }
        } else{
            return (
                <h3>Sorry... No available flights. Check again soon</h3>
            )
        }
    }

    render() {
        // if (this.state.body != null) {
        //     console.log("hohoho" + this.state.body[0].id)
        //     return (
        //         <Table bordered>
        //             <thead>
        //                 <tr>
        //                     <th>Flight Id</th>
        //                     <th>Flight Cost</th>
        //                     <th>Total Flight Duration</th>
        //                     <th>Available Seats</th>
        //                     <th>Destination</th>
        //                     <th>Departure Point</th>
        //                     <th>Status</th>
        //                 </tr>
                        {/* <td>{this.state.body[0].id}</td>
                <td>{this.state.body[0].cost}</td>
                <td>{this.state.body[0].flightDate}</td>
                <td>{this.state.body[0].availableSeats}</td>
                <td>{this.state.body[0].destination.planetName}</td>
                <td>{this.state.body[0].departure.planetName}</td>
                <td>{this.state.body[0].status}</td> */}
        //             </thead>
        //             <tbody>
        //                 {this.state.body.map((flight: any, i: number) => {
        //                     return (
        //                         <tr>
        //                             <td>{this.state.body[i].id}</td>
        //                             <td>{this.state.body[i].cost}</td>
        //                             <td>{this.state.body[i].flightDate}</td>
        //                             <td>{this.state.body[i].availableSeats}</td>
        //                             <td>{this.state.body[i].destination.planetName}</td>
        //                             <td>{this.state.body[i].departure.planetName}</td>
        //                             <td>{this.state.body[i].status}</td>
        //                         </tr>
        //                     )
        //                 })}
        //             </tbody>
        //         </Table>
        //     )
        // }

        /*
        const scheduledFlights = this.props.allFlights.map((flight:any, i: any) => {
                if (this.props.allFlights.length != 0) {
                    <td>{this.state.body[0].id}</td>
                    <td>{this.state.body[0].cost}</td>
                    <td>{this.state.body[0].flightDate}</td>
                    <td>{this.state.body[0].availableSeats}</td>
                    <td>{this.state.body[0].destination.planetName}</td>
                    <td>{this.state.body[0].departure.planetName}</td>
                    <td>{this.state.body[0].status}
                }
        */
        return (

            <>
                {this.displayFlights()}
            </>

            // <div>
            //     {/* <Form >
            //         <Button>Le's Button</Button>
            //     </Form> */}
                
            // </div>

        )
        //     })
        //     if (this.props.allFlights) {
        //         return (
        //             <>
        //                 <Navbar/>
        //                 {currentFlights}
        //             </>
        //         )
        //     } else {
        //         return(
        //             <>
        //                 <p>An unexpected error occurred</p>
        //             </>
        //         )
        //     } 
    }
} 