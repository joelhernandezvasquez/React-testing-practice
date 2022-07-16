import { useEffect,useState,useRef } from 'react';
import {apiKey} from '../API/index';

const useFetchImage = (poster_path) => {
 
    const[data,setData] = useState({
        isLoading:true,
        error:false,
        data:null
    });

    const isMounted = useRef(true);

    useEffect(() => {
     
       return () => {
         isMounted.current = false;
       }
     }, [])

     useEffect(()=>{

        const setImageConfiguration = async () =>{
           try{
             const request = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
             const result = await request.json();
    
              if(isMounted){
                const img = result.images.base_url
                const posterSize = result.images.poster_sizes[4];     
                setData({data:`${img}${posterSize}${poster_path}`, isLoading:false,error:null})
              }
           }
           catch(err){
             setData({
                 data:null,
                 isLoading:false,
                 error:err
             })
           }
        } 
            setImageConfiguration();  
    
      },[])
    
    return data;

}

export default useFetchImage