
import {useRef,useState,useEffect} from 'react';
import Modal from '../../Notification/Modal';
import useToogle from '../../hooks/useToogle';
import Confirmation from '../../Notification/Confirmation';
import Toast from '../Toast/Toast';
import { getAllShows, postShow } from '../../API';
import { getYear,isBookmarked,getClassifiedShow} from '../helpers';
import BookmarkIconImage from '../../assets/icon-bookmark-empty.svg';
import BookmarkIconImageFilled from '../../assets/icon-bookmark-full.svg';

const BookmarkIcon = ({info,imgPath,media}) => {
const [toogle,handleToogle] = useToogle(false);
const scrollTop = useRef(null);
const [isConfirmed,setConfirmation] = useState(false);
const [postStatus,setPostStatus] = useState(0);
const [Bookmarked,setBookmarked] = useState(false);

useEffect(()=>{
  if(isConfirmed){  
      const handlePost = async () =>{
      const {status} =  await postShow({id:info.id,media_type:info.media_type || media,year:getYear(info.release_date ||info.first_air_date),title:info.title || info.name,imgPath:imgPath,classifiedShow:getClassifiedShow(info.media_type,info.adult)})
      setPostStatus(status);
    }
   handlePost();
  }
},[isConfirmed])


useEffect(()=>{
  getAllShows()
  .then(response =>{
    const {success,data} = response;
     success?setBookmarked(isBookmarked(data,info.id)):console.log(data);
  })
  
},[postStatus,info])

const onHandleToogle = (e) =>{
 scrollTop.current = e.pageY;
  handleToogle()
}

const onHandleConfirmation =() =>{
   handleToogle();
  setConfirmation(true);
}

  return (
    <div className="bookmark_icon_container flex flex_center" onClick={(e)=>onHandleToogle(e) }>
       <img src={!Bookmarked ? BookmarkIconImage : BookmarkIconImageFilled} alt = "Bookmark" />
       {toogle && <Modal content={<Confirmation close = {handleToogle} top = {scrollTop} handleConfirmation = {onHandleConfirmation}/>} />}
      {postStatus === 201 && <Modal content = {<Toast close = {setPostStatus} appereance={'Success'} message={'Your Show has been saved.'} top = {scrollTop}/>}/>}
   
    </div>
  )
}

export default BookmarkIcon