import {useState} from 'react'
import Alert from './Alert';
import icons from '../../Constants';

const AlertContainer = () => {
    const[openAlert,setAlert] = useState(false);
    const [alertMessage,setAlertMessage] = useState({
      messageInfo:null,
      backgroundColor:null
    });

     const getBackground = (iconData) =>
     {
      const {background} = icons.find(icon=> icon.id === iconData)
      return background;
     }
    const onHandleClick = () =>{
        setAlertMessage({messageInfo:event.target.dataset.msg,backgroundColor:getBackground(event.target.dataset.icon)});
        setAlert(true); 
    }

    const handleReset = () =>{
        setAlert(false);
        setAlertMessage(null);
    }

  return (
    <section className="alert_btn_container">
    <button className="success" data-msg="Congratulations! You clicked the button successfully." data-icon="success" onClick={onHandleClick}>Show Success Alert</button>
    <button data-msg="Here is some information you should be aware of." data-icon="info" onClick={onHandleClick}>Show Info Alert</button>
    <button data-msg="Error: You did something wrong." data-icon="error" onClick={onHandleClick}>Show Error Alert</button>
    <button  className="btn_clear" onClick={handleReset}>Clear Alert</button>
    
    {openAlert && <Alert message={alertMessage}/>}
</section>
  )
}

export default AlertContainer