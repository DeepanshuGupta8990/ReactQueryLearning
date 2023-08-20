import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuperHeros() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,seterror] = useState("");

  useEffect(() => {
    const func = async () => {
      let res
     try{
     res = await axios.get(" http://localhost:400/superheroes")
     }catch(err){
        alert(err.message);
     }
    if(res?.data){
      setIsLoading(false);
      setData(res.data)
      console.log(res.data)
    }
    }
    func()
  }, [])

  return (
    <div>
      <div>
      {
        isLoading && (
          <div>
                   Loading
               </div> 
        )
      }
      </div>
      <div>
      {
        data.map((item)=>{
          return(
            <div key={item.name}>
            <div>{item.name} - {item.real_name}</div>
            </div>
           )
          })
        }
        </div>
    </div>
  )
}
