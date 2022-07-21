import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const numberEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      numberEnteredAmount < 1 ||
      numberEnteredAmount > 5
    ) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(numberEnteredAmount);
};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!setValidAmount && <h2>Please enter a valid amount (1-5)!</h2>}
    </form>
  );
};

export default MealItemForm;
