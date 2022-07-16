import { useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import ListCard from '../EntertemainList/ListCard';
import { fetchTrending} from '../../API';

const Trending = () => {
const trendingShowContainerRef = useRef();
const [trendingShowWidth,setTrendingShowWidth] = useState();
const [trending,setTrending] = useState([]);
const offWidth = useRef();

useEffect(()=>{
    if(trending.length === 0){
      offWidth.current = trendingShowContainerRef.current.offsetWidth;
    }
  setTrendingShowWidth(trendingShowContainerRef.current.scrollWidth - offWidth.current);

 },[trending])

 useEffect(()=>{
    fetchTrending()
    .then((response)=>{
        setTrending(response.data);
    })
 },[])
  return (
    <section className="trending_show_section animate__animated animate__fadeIn"  aria-label="Trending Shows">
    <h2 className="heading_section white_text fw_300 fs_600">Trending</h2>

    <motion.div ref={trendingShowContainerRef} className='trending_show_container' whileTap={{cursor:'grabbing'}}>
        <motion.div drag="x" dragConstraints={{right:0,left:-trendingShowWidth}} className='inner_show_container'>
       
            <ListCard data = {trending} type="shows"/> 
        </motion.div>
   </motion.div> 

</section>

  )
}

export default Trending