import { placeholders } from "../../Constants/constants";


// this function connects to the google auth2 api and return the user profile
// name if the user has been authenticated succesfully
export const getProfileName = () =>{
  
    try{
        return window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
       
    }
    catch(err){
        console.log(err);
    }

}

export const getProfileEmail = () =>{
    try{

      
       return window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
    
    }
    catch(err) {
        console.log(err);
    }
}

export const getImageUrl = () =>{
    try{

        return window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl();
     
     }
     catch(err) {
         console.log(err);
     }
}

export const getPlaceholder = (route) =>{
   
    if(route ==='/')
     route = '/home'
    
     const result = placeholders.find(placeholder => placeholder.id === route)
     return result.value; 
}

export const getYear = (date) =>{
  return new Date(date).getFullYear().toString();
}

export const getClassifiedShow = (media_type,type_of_show) =>{
  return media_type === 'movie' && !type_of_show ? 'PG' : 'E';
}


export const isBookmarked= (arrayShows,id) =>{
   return  arrayShows.some((v)=> v.id === id)
}

export const filterByMedia = (array,media)=>
{
 return array.filter((d)=> d.media_type === media)
}