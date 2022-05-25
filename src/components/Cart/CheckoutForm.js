import styles from "./CheckoutForm.module.css";
const CheckoutForm = (props) => {
  const orderSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={orderSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street:</label>
        <input type="text" id="street"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code:</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">City:</label>
        <input type="text" id="city"></input>
      </div>
      <button>Confirm</button>
      <button onClick={props.onCancel} type="button">
        Cancel
      </button>
    </form>
  );
};
export default CheckoutForm;
