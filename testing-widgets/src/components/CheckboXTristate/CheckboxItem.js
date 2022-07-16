
const CheckboxItem = ({id,item,isChecked,updateCheckboxItem}) => {

  return (
    <div className="form_field">
    <input className="child" 
     type="checkbox" id={id}
      aria-checked="false"
      checked = {isChecked}
      onChange = {()=>updateCheckboxItem(id)}
    />
    <label htmlFor={`${item}`}>{item}</label>
   </div>


  )
}

export default CheckboxItem