import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = ()=>{
  return axios.get(" http://localhost:400/superheroes1")
}

export default function RQSuperheros() {
  const {isLoading, data, isError,error} = useQuery('super-heroes',fetchSuperHeroes);
  // console.log(data)
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2> RQ SuperHeros Page</h2>
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
