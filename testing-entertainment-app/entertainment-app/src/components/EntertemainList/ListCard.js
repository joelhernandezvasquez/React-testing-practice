
import TrendingCard from "./TrendingCard"
import EntertaimentCard from "./EntertaimentCard"


const ListCard = ({data,type,media}) => {
  return (
    <>
   
     {type ==='shows'?(data.map((item)=>{
       return <TrendingCard key ={item.id} show ={item}/>
     })):(data.map((item)=>{
       return <EntertaimentCard key = {item.id} info = {item} alternateMediaType= {media}/>
     }))}
    </>
  )
}

export default ListCard