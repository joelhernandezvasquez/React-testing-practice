import propTypes from 'prop-types';
import MovieIcon from '../../assets/icon-category-movie.svg';
import TvSeries from '../../assets/icon-category-tv.svg';

const CardInformation = ({year,media_type,classifiedShow,title}) => {
  return (
    <div className='card_information container'>
        
     <div className='card_information_heading flex flex_center_align fs_100 fw_300'>
        <p>{year}</p>
         <div className='card_dot'></div>
        
        <div className='media_type_container flex flex_center_align'>
        <img src={media_type === 'movie'? MovieIcon: TvSeries} alt ="Movie"/>
        <p className='capitalize'>{media_type}</p>
        </div>
        
        <div className='card_dot'></div>
        <p>{classifiedShow}</p>
     </div>
     <h5 className='fs_300 fw_500 card_title'>{title}</h5>
     
    </div>
  )
}

export default CardInformation

CardInformation.prototypes = {
    year:propTypes.string.isRequired,
    media_type:propTypes.string.isRequired,
    classifiedShow:propTypes.string.isRequired,
    title:propTypes.string.isRequired

}