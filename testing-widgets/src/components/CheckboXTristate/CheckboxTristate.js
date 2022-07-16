
import {useState,useRef} from 'react'
import CheckboxItem from "./CheckboxItem";

const CheckboxTristate = () => {
const [parentCheckbox,setParentCheckbox] = useState(false);
const [checkboxItems,setCheckboxItems] = useState(
 [{id:'cheese', item:'Cheese',isChecked:false} , {id:'mushrooms', item:'Mushrooms',isChecked:false},{id:'olives', item:'Olives',isChecked:false}]
)
const checkboxRef = useRef();

const updateCheckboxItemState = () =>{
    const newCheckboxItemsState = checkboxItems.map(item =>{
        return {
            id:item.id,
            item:item.item,
            isChecked:!item.isChecked
        }
       })
       return newCheckboxItemsState;
}
const onHandleChange = ({target}) =>{
  if(target.checked){
   setParentCheckbox(true);
   setCheckboxItems(updateCheckboxItemState())   // creating a new array to return a new state for checkboxItems
  }
  else{
    setParentCheckbox(false);
    setCheckboxItems(updateCheckboxItemState())
  }
}

const updateCheckboxItem = (id) =>{
   const newCheckboxItemsState = [...checkboxItems];
   newCheckboxItemsState.forEach((checkbox)=>{
     if(checkbox.id === id){
        checkbox.isChecked = !checkbox.isChecked;
     }
   })
    setCheckboxItems(newCheckboxItemsState);


    const itemsChecked = checkboxItems.filter(item => item.isChecked === true)

    if(itemsChecked.length < 1)
    {
      setParentCheckbox(false);
      checkboxRef.current.indeterminate = false;
      return;
    }

    if(itemsChecked.length >= 1 && itemsChecked.length < 3)
    {
      checkboxRef.current.indeterminate = true;
     
    }

    if(itemsChecked.length === 3){
      setParentCheckbox(true);
      checkboxRef.current.indeterminate = false;
      return;
    }

}
return (
    <fieldset className="container">
    <legend>Choose the ingredients for your pizza.</legend>
     <div className="form_field parent">
      <input type="checkbox"
       id='parent' 
       aria-checked="false" 
       ref = {checkboxRef}
       checked = {parentCheckbox}
       onChange = {(e)=> onHandleChange(e)}
       />

      <label htmlFor = "parent">Select All ingredients</label>
     </div>
 
     {checkboxItems.map((item=>{
        return <CheckboxItem key={item.id} {...item} updateCheckboxItem = {updateCheckboxItem}/>
     }))}

 </fieldset>
  )
}

export default CheckboxTristate