import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export default function RQSuperHeroPage() {
  let { heroId } = useParams();
  // console.log(heroId)

  const {isLoading,data,isError,error} = useSuperHeroData(heroId)
  console.log('data of superHero',data)

 if(isLoading){
  return <h2>Loading...</h2>
 }
 if(isError){
  return <h2>{error.message}</h2>
 }
  return (
    <div>
      SuperHeroDetails
      <h2>heroId:{heroId}</h2>
      <h2>{data.data.name }</h2>
    </div>
  )
}
