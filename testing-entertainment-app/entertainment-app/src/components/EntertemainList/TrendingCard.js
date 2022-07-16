import { useRef } from 'react';
import{motion} from 'framer-motion';
import BookmarkIcon from '../bookmarks/BookmarkIcon';
import CardInformation from './CardInformation';
import useToogle from '../../hooks/useToogle';
import HoverCard from './HoverCard';
import useFetchImage from '../../hooks/useFetchImage';
import {getYear,getClassifiedShow} from '../helpers/index';


const TrendingCard = ({show}) => {
 
 const year = getYear(show.media_type === 'movie' ? show.release_date: show.first_air_date)  // probably needs to use memo here
 const {media_type} = show;
 const classifiedShow = getClassifiedShow(media_type,show.adult);
 const title = media_type === 'movie'? show.title : show.name
 const {data,isLoading} = useFetchImage(show.poster_path);
 const [isShown,handleToogle] = useToogle(false);
 const trending_card_ref = useRef();

  return (
    <motion.div className='trending_card' ref = {trending_card_ref} onMouseEnter={()=>handleToogle()} onMouseLeave = {()=> handleToogle()}>
    
      {!isLoading && ( 
        <>
          <img className="trending_card_img border_radius" src={data} alt="trending" />
          
          <div className='inner_trending_information flex flex_column'>
             <BookmarkIcon info = {show} imgPath = {data}/>
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
        {isShown && <HoverCard height = {trending_card_ref.current.getBoundingClientRect().height}  id={show.id} media= {media_type}/>}
    </motion.div>
  )
}

export default TrendingCard