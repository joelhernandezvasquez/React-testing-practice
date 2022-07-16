
import {useEffect,useState,useRef} from 'react';

const useFetchUrl = (url) =>{
  const [response,setResponse] = useState({
      data:null,
      isLoading:true,
      error:null
  });
  const isMounted = useRef(true);


  useEffect(()=>{
      
     const getData = async () =>{

      try{
        if(isMounted){
          const request = await fetch(url);
          const response = await request.json();
          setResponse({
            data:response,
            isLoading:false,
            error:null
          })
 
        }
      }
      catch(err)
      {
        setResponse({
          data:null,
          isLoading:true,
          error:err
        })
      }
       
     }
     getData();

     return () => {
      isMounted.current = false;
     }

    
  },[url])

  return response;

}

export default useFetchUrl;