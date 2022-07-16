
import PropTypes from 'prop-types';

const Alert = ({message}) => {
    
  return (
  <div className='alert_box' role="alert" style={{backgroundColor:message.backgroundColor}}>
    <p>{message.messageInfo}</p>
  </div>
  )
}

export default Alert

Alert.propTypes = {
  message:PropTypes.string.isRequired
}