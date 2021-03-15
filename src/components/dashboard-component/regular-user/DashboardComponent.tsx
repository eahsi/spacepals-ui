import React from 'react'
import { Link, Redirect } from 'react-router-dom'


interface IDashboardState {

}

interface IDashboardProps {
    currentUser: any

}

export class DashboardComponent extends React.Component<IDashboardProps, any>{

    constructor(props: any) {
        super(props)
        // this.state = {
        //     //currentUser: null
        // }
    }



    render() {
        if (this.props.currentUser === null) {
            return (<Redirect to="/login" />)
        }
        return (
            <div className="container">
                <div style={{
                    borderStyle: "solid",
                    borderColor: "white",
                    borderRadius: "25px",
                    fontStyle: "italic"
                }}>
                    <h3 style={{ color: "white" }} className="text-center">Welcome {}</h3>
                    <div className="row" style={{}}>
                        <div className="col-4" style={{}}>
                            <h2 style={{ color: "white", paddingLeft: "10px" }}>Select ...</h2>
                            <div style={{ color: "white", paddingLeft: "15px", textAlign: "center" }}>
                                <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/view-flights">view Scheduled Flights</Link></h5>
                                <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/book">Book a flight</Link></h5>
                                {/* <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>View your flights history</h5> */}
                                <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/planet">Facts about planets</Link></h5>
                                {
                                    this.props.currentUser.role === "BASIC_USER" ?
                                        <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/registerCompany">Open a business account</Link></h5>
                                        : ''
                                }

                                {
                                    this.props.currentUser.role === "FLIGHT_MANAGER" ?
                                        <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/flight">Schedule a flight</Link></h5>
                                        : ''
                                }
                                {
                                    this.props.currentUser.role === "FLIGHT_MANAGER" ?
                                        <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/registerCompany">Register company</Link></h5>
                                        : ''
                                }

                                {
                                    this.props.currentUser.role === "FLIGHT_MANAGER" ?
                                        <h5 style={{ borderStyle: "solid", borderColor: "violet", borderRadius: "25px", backgroundColor: "black" }}><Link to="/ship">Add Aircraft</Link></h5>
                                        : ''
                                }


                            </div>
                        </div>
                        <div className="col-8">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}