import axios from 'axios'


export const getFlights = async () : Promise<object> =>{
    try {
        const res = await fetch('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights',{
            method: 'GET'
        })
        const body = await res.json()
        console.log("asdsadasdsadas" + body)
        return body



    } catch (e) {
        return {}
    }
}