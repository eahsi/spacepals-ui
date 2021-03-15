import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'http://api.le-systeme-solaire.net/rest/bodies/?data=englishName,moons,moon,aphelion,vol,volValue,volExponent,gravity,discoveredBy,discoveryDate&filter[]=isPlanet,neq,0'
})