import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = ()=>{
    return axios.get(" http://localhost:400/superheroes")
  }

export const useSuperHeroesData = (onSuccess,onError)=>{
   return useQuery('super-heroes',fetchSuperHeroes,{
        // cacheTime:50000, // default chache time is 5 min
        // staleTime:30000, // deafult stale time is 0 sec
        // refetchOnMount:true, //query will refectch on mount if the data is stale , possible values are true,false,always
        // refetchOnWindowFocus:true,
        // refetchInterval:polling, //polling
        // refetchIntervalInBackground:true,
        // enabled:false, // by using enabled we telling useQuery to not make fetch request or disabling fetching data on mount
        onSuccess:onSuccess,// onSuccess function will be called when on successfull fetch
        onError:onError,  // onError fucntion will be called when error arried on data fetching
        //   select:(data)=>{
        //     const superHerosNames = data.data.map((hero)=>{
        //       return (hero.name)
        //     })
        //   //  console.log(superHerosNames)
        //    return superHerosNames
        //   }
    
      })
}