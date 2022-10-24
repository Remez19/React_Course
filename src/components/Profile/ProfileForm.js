import classes from "./ProfileForm.module.css";
import { useRef, useContext, useState } from "react";
import AuthContext from "../../store/auth-contex";
import LoadingSpinner from "../UI/LoadingSpinner";
// import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import PasswordChangedCard from "../UI/PasswordChanged";

const API_KEY = "AIzaSyDVxBZnx2-yQwfW4crmWoyjgnxrS4gEGn4";

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const userToken = useContext(AuthContext).token;
  const newPasswordRef = useRef();
  // const history = useHistory();
  const changePasswordHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: userToken,
          password: newPasswordRef.current.value,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          // Success case
          return response.json();
        } else {
          // Error case
          return response.json().then((data) => {
            let errorMessage = "Falied to change";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        // history.replace("/");
        setPasswordChanged(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Fragment>
      {!passwordChanged && (
        <form onSubmit={changePasswordHandler} className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              ref={newPasswordRef}
              required
            />
          </div>
          <div className={classes.action}>
            {!isLoading && <button>Change Password</button>}
            {isLoading && <LoadingSpinner />}
          </div>
        </form>
      )}
      {passwordChanged && <PasswordChangedCard />}
    </Fragment>
  );
};

export default ProfileForm;
