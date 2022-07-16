
const Toast = ({close,appereance,message,top}) => {

  const icons = {
    Success: <i className="fa fa-check toast_icon icon_success" aria-hidden="true"></i>,
    Error: <i className="fa fa-exclamation-circle toast_icon" aria-hidden="true"></i>
  }

  return (
    <div aria-label="toast" className='toast'  style={{marginTop:`${top.current - 120}px`}}>
      
       {icons[appereance]}
      
      <h2 className='toast_title'> {appereance ==='Success'? 'Succesfully Saved':'Error'} </h2>

      <i aria-label="close-icon" className="fa fa-times toast_close" aria-hidden="true" onClick={()=> close(0)}></i>

      <p className='toast_message'>{message}</p>

    </div>
  )
}

export default Toast