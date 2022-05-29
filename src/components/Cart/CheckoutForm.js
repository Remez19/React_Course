import styles from "./CheckoutForm.module.css";
import { useRef, useState } from "react";

// Helper functions

const isFieldEmpty = (inputField) => {
  return inputField.current.value.trim() !== "";
};
const isValidPostal = (postalCodeInput) => {
  return postalCodeInput.current.value.trim().length === 5;
};

const CheckoutForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    nameValid: true,
    streetValid: true,
    cityValid: true,
    postalCodeValid: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const orderSubmitHandler = (event) => {
    event.preventDefault();
    setFormValidity({
      nameValid: isFieldEmpty(nameInputRef),
      streetValid: isFieldEmpty(streetInputRef),
      cityValid: isFieldEmpty(cityInputRef),
      postalCodeValid: isValidPostal(postalCodeInputRef),
    });
    let formIsValid =
      formValidity.nameValid &&
      formValidity.streetValid &&
      formValidity.postalCodeValid &&
      formValidity.cityValid;
    if (!formIsValid) {
      // Form is invalid
      return;
    }
    props.onOrder({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
      city: cityInputRef.current.value,
    });
  };
  return (
    <form className={styles.form} onSubmit={orderSubmitHandler}>
      <div
        className={`${styles.control} ${
          formValidity.nameValid ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.nameValid && (
          <p>Please Enter a valid name! (not empty)</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.streetValid ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.streetValid && (
          <p>Please Enter a valid street! (not empty)</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.postalCodeValid ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formValidity.postalCodeValid && (
          <p>Please Enter a valid postal code! (five characters) </p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.cityValid ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.cityValid && <p>Please Enter a valid city(not empty)</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default CheckoutForm;
