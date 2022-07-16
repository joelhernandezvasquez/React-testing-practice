import { useState } from 'react';
//import './toogleButton.css';

const ToogleButton = () => 
{

    const buttons=['Dog','Cat'];
    const [activeButton,setActiveButton] = useState('Dog');
    
  return (
    <section>
        <h1>ToogleButton</h1>
        {buttons.map((button)=>{
            return <button key = {button}
                      className={`${activeButton === button && 'active_button'}`}
                      aria-pressed = {`${activeButton === button? true : false}`}
                      onClick={()=> setActiveButton(button)}>{button}
                    </button>
        })}
        
        </section>
  )
}

export default ToogleButton