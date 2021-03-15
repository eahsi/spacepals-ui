import { apiClient } from '.'

export const getPlanets = async(url:string) : Promise<object> => {
    let response = await apiClient.get('')
    let body = await response.data.bodies
    //let bodyJson = await body.json()
    return body

}