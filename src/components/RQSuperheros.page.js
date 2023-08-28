import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = ()=>{
  return axios.get(" http://localhost:400/superheroes")
}

export default function RQSuperheros() {
  const onSuccess = (data)=>{
    console.log("Perform side effects after data fetching",data);
  }

  const onError = (error)=>{
    console.log("Perform side effects after encountering error",error);
  }

  const {isLoading, data, isError, error, isFetching,refetch} = useQuery('super-heroes',fetchSuperHeroes,{
    // cacheTime:50000, // default chache time is 5 min
    // staleTime:30000, // deafult stale time is 0 sec
    // refetchOnMount:true, //query will refectch on mount if the data is stale , possible values are true,false,always
    // refetchOnWindowFocus:true,
    refetchInterval:2000, //polling
    refetchIntervalInBackground:true,
    // enabled:false, // by using enabled we telling useQuery to not make fetch request or disabling fetching data on mount
    onSuccess:onSuccess,// onSuccess function will be called when on successfull fetch
    onError:onError  // onError fucntion will be called when error arried on data fetching

  });
  // console.log(data)
  console.log(isLoading,isFetching)
  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2> RQ SuperHeros Page</h2>
      {/* <button onClick={refetch}>Fecth Data</button> */}
      {
      data?.data.map((hero)=>{
        return(
          <div key={hero.name}>
              {hero.name}
          </div>
        )
      })
      }

    </>
  )
}
