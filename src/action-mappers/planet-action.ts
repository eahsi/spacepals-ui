import {getPlanets} from '../remote/api-clients/api-clients';

export const destinationTypes = {
    SUCCESSFULL_GET_PLANETS: 'PLANET_SUCCESSFULL_GET_PLANETS',
    UNSUCCESSFULL_GET_PLANETS: 'PLANET_UNSUCCESSFULL_GET_PLANET'
}

export const getAllPlanets = () => async (dispatch: any) =>{

    try{
        
        let destinations = await getPlanets('')
        //return destinations

        dispatch({
            type:destinationTypes.SUCCESSFULL_GET_PLANETS,
            payload: {
                allDestinations: destinations
            }
        })
    } catch(e){
        dispatch({
            type: destinationTypes.UNSUCCESSFULL_GET_PLANETS
        })
    }
}