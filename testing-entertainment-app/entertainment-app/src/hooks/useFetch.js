import { useState, useEffect,useRef } from 'react'


const useFetch = (search,url) => {

 const [response,setResponse] = useState({
     data:null,
     isLoading:true,
     error:null
 });
 
 const isMounted = useRef(true);

 useEffect(() => {
  
    return () => {
      isMounted.current = false;
    }
  }, [])


  useEffect(()=>{
    const getData = async () =>{
       try{
          const request  = await fetch(url);
          const result = await request.json();

          if(isMounted){
              setResponse({data:result, isLoading:false,error:null})
          }
       }
       catch(err){
         setResponse({
             data:null,
             isLoading:false,
             error:err
         })
       }
    } 

    if(search){
        getData();
    }

  },[search,url])

return response;
}

export default useFetch