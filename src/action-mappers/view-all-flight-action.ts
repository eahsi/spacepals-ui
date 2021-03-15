import { getFlights } from "../remote/get-flights/get-all-flights";


export const flightTypes = {
    SUCCESSFUL_GET_FLIGHTS: 'FLIGHT_SUCCESSFUL_GET_FLIGHTS',
    UNSUCCESSFUL_GET_FLIGHTS: 'FLIGHT_UNSUCCESSFUL_GET_FLIGHTS'
}

export const getAllFlights = () => async(dispatch:any) => {
    let flights:any = await getFlights;
    if (flights.body) {
        dispatch({
            type: flightTypes.SUCCESSFUL_GET_FLIGHTS,
            payload: {
                allFlights: flights.body
            }
        })
    } else {
        dispatch({
            type: flightTypes.UNSUCCESSFUL_GET_FLIGHTS
        })
    }
}