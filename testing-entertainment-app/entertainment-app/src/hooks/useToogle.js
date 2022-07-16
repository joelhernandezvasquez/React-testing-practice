import {useState} from 'react'

const useToogle = (initialValue = false) => {
 
    const [toogle,setToogle] = useState(initialValue);

    const handleToogle = () =>{
        setToogle(!toogle);
    }

    const toggling = (value) =>{
     setToogle(value);
    }

    return {toogle,handleToogle,toggling};
}

export default useToogle