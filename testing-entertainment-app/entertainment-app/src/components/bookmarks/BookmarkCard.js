
import { useRef } from 'react';
import useToogle from '../../hooks/useToogle';
import HoverCard from '../EntertemainList/HoverCard';
import BookmarkIcon from '../bookmarks/BookmarkIcon';
import CardInformation from '../EntertemainList/CardInformation';

const BookmarkCard = ({show}) => {
 
    const {id,imgPath,year,media_type,title,classifiedShow} = show
    const [isShown,handleToogle] = useToogle(false);
    const card_entertaiment_img_container_ref = useRef();

    return (
    <div className='card_entertaiment'>

        <div className="card_entertaiment_img_container" onMouseEnter={()=>handleToogle()} onMouseLeave = {()=> handleToogle()}>
            <img className="entertaiment_card_img border_radius" src={imgPath} alt=""  ref = {card_entertaiment_img_container_ref}/>
            <BookmarkIcon info = {show} imgPath = {imgPath} />
         </div>   

              <div className='inner_card_information'>
             <CardInformation 
              year={year}
              media_type = {media_type}
              classifiedShow = {classifiedShow}
              title= {title}
             />  
          </div>
             {isShown && <HoverCard height = {card_entertaiment_img_container_ref.current.getBoundingClientRect().height} id={id} media= {media_type}/>}  
          
    </div>
  )
}

export default BookmarkCard