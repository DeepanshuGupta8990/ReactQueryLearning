import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHero = (heroId)=>{
    return axios.get(`http://localhost:400/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId)=>{
    return useQuery(['super-hero',heroId],()=>{return fetchSuperHero(heroId)})
}