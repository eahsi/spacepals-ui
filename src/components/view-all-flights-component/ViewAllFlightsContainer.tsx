import React from 'react';
import { IState } from '../../reducers';
import { getFlights } from '../../remote/get-flights/get-all-flights'
import { connect } from 'react-redux';
import { ViewAllFlights } from './ViewAllFlightsComponent';

const mapStateToProps = (state: IState) => {
    return {
        allFlights: state.flightState.allFlights
    }
}

const mapDispatchToProps = {
    getFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllFlights)