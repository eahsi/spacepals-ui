import {IDestinationState} from '.';
import {destinationTypes} from '../action-mappers/planet-action';

const initialState: IDestinationState = {
    allDestinations:[]
}

export const planetReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case destinationTypes.SUCCESSFULL_GET_PLANETS: {
            return {
                ...state,
                allDestinations: action.payload.allDestinations
    
            }
        }
        case destinationTypes.UNSUCCESSFULL_GET_PLANETS: {
            return state
        }
        default:
            return state
    }
}