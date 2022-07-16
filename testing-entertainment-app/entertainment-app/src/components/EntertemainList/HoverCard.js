//import propTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const HoverCard = ({height,id,media}) => {

  let navigate = useNavigate();

  const getHeight = () =>{
    return {
      height:`${height}px`
    }
  }
  
  return (
    <div className="hover_card animate__animated animate__fadeIn" style={getHeight()}>
      <div className='play_button_container' onClick={()=> navigate(`/show/${id}`,{state:media})}>
      
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" 
        fill="#FFF"/>
      </svg>
       <span>Play</span>
      
      </div>
    </div>
    
 
    
  )
}

export default HoverCard;

// HoverCard.prototypes = {
//   height:propTypes.string.isRequired,
//   id:propTypes.number.isRequired,
//   media:propTypes.string.isRequired
  

// }