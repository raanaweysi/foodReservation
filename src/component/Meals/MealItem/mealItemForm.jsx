import Input from "../../UI/Input";
import classes from "./mealItemForm.module.css";
import { useRef } from "react";
import { useState } from "react";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputeRef = useRef();

 function handelSubmit(e) {
  e.preventDefault();
  const enteredAmount = amountInputeRef.current.value;
  const enteredAmountNumber = +enteredAmount;

  if( enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber >5){
    setAmountIsValid(false);
    return;
  }
  props.onAddToCart(enteredAmount);
 }

  return ( 
    <form onSubmit={handelSubmit} className={classes.form}>
      <div>
        <Input  label="Amount" ref={amountInputeRef} input={{
          id:"Amount" ,
          type:"number",
          min:"1",
          max:"5",
          step:"1",
          defaultValue:"1"
        }} 
        />
      </div>
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid number (1-5)</p> }
    </form>
   );
}
 



export default MealItemForm;