import React, { Component } from 'react';


export class ViewFlightsRentalsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flights: [
                { id: 1, name: 'The Enterprise', company: 'Entertainment SpaceWide', destination: 'Saturn'},
                { id: 2, name: 'The Entripid', company: 'NYC Space Travel', destination: 'Venus'},
                { id: 3, name: 'The Black Pearl', company: 'Pirates off the Carribean', destination: 'Mars'},
                { id: 4, name: 'The Dingy', company: 'SSE', destination: 'Earth'}
            ]
        }
    }

    flightHistory() {
        return this.state.flights.map((flight, index) => {
            const {id, name, company, destination} = flight;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{company}</td>
                    <td>{destination}</td>
                </tr>
            )
        })
    }

    flightHeader() {
        let header = Object.keys(this.state.flights[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>SpacePals Dynamic Table!</h1>
                <table id='flights'>
                    <tbody>
                        {this.flightHistory()}
                    </tbody>
                </table>
            </div>
        )
    }
}