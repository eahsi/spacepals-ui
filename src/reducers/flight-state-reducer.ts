import { IFlightState } from ".";
import { flightTypes } from "../action-mappers/view-all-flight-action";


const initialState: IFlightState = {
    allFlights: []
}

export const flightStateReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case flightTypes.SUCCESSFUL_GET_FLIGHTS: {
            return {
                ...state,
                allFlights: action.payload.allFlights
            }
        }
        default:{
            return state;
        }
    }
}