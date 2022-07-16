
const Recommended = ({children,title}) => {

  return (
    <section className='animate__animated animate__fadeIn' aria-label="Recommended for you">
         <h2 className=" heading_section white_text fw_300 fs_600">{title}</h2>
          <div className='grid_card_container'>
           {children} 
          </div>
       
      </section>
  )
}

export default Recommended