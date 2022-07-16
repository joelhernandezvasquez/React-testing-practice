import { useRef } from 'react';
import BookmarkIcon from '../bookmarks/BookmarkIcon';
import CardInformation from './CardInformation';
import useToogle from '../../hooks/useToogle';
import HoverCard from './HoverCard';
import useFetchImage from '../../hooks/useFetchImage';
import {getYear,getClassifiedShow} from '../helpers/index';

const EntertaimentCard = ({info,alternateMediaType}) => {

  const year = getYear(info.release_date || info.first_air_date) ;
 const media_type = info.media_type || alternateMediaType;
 const classifiedShow = getClassifiedShow(media_type,info.adult);
 const title = info.title || info.name;
 const {data,isLoading} = useFetchImage(info.poster_path);
 const [isShown,handleToogle] = useToogle(false);
 const card_entertaiment_img_container_ref = useRef();
 
  return (
   <div className='card_entertaiment' onMouseEnter={()=>handleToogle()} onMouseLeave = {()=> handleToogle()}>
      {!isLoading && ( 
        <>
         <div className="card_entertaiment_img_container" ref = {card_entertaiment_img_container_ref}>
            <img className="entertaiment_card_img border_radius" src={data} alt="" />
            <BookmarkIcon info = {info} imgPath = {data} media = {alternateMediaType} />
         </div>          
          
          <div className='inner_card_information'>
            
             <CardInformation 
              year={year}
              media_type = {media_type}
              classifiedShow = {classifiedShow}
              title= {title}
             />
            
          </div>
        
        </>
        
      )
      }
     {isShown && <HoverCard height = {card_entertaiment_img_container_ref.current.getBoundingClientRect().height} id={info.id} media= {media_type}/>}
     
   </div>
  )
}

export default EntertaimentCard