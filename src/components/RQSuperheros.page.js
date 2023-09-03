import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {useSuperHeroesData} from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';



export default function RQSuperheros() {
  // const [polling,setPolling] = useState(3000);
  const onSuccess = (data)=>{
    console.log("Perform side effects after data fetching",data);
    console.log(data)
    // if(data.data.length>5){
    //     // setPolling(false)
    //     console.log('Polling is fasle now')
    // }
  }

  const onError = (error)=>{
    console.log("Perform side effects after encountering error",error);
    // setPolling(false);
  }

  const {isLoading, data, isError, error, isFetching,refetch} = useSuperHeroesData(onSuccess,onError)
  // console.log('data',data)
  // console.log(isLoading,isFetching)
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2> RQ SuperHeros Page</h2>
      <button onClick={refetch}>Fecth Data</button>
      {
      data?.data.map((hero)=>{
        return(
          <div key={hero.id}>
            <Link to={`/rq-super-heros/${hero.id}`}>
              {hero.name}
            </Link>
          </div>
        )
      })
      }

      {/* {
        data.map((heroName)=>{
          return <div key={heroName}>{heroName}</div>
        })
      } */}

    </>
  )
}
