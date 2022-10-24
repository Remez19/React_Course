import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

const calcRemmainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExperationTime = new Date(expirationTime).getTime();
  const remainTime = adjExperationTime - currentTime;

  return remainTime;
};

const retrivedStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExperationDate = localStorage.getItem("experationTime");

  const remainingTime = calcRemmainingTime(storedExperationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("experationTime");
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrivedStoredToken();
  let initToken;
  if (tokenData) {
    initToken = tokenData.token;
  }
  const [token, setToken] = useState(initToken);

  const userIsLoggedIn = !!token;

  const logeOutHandler = useCallback(() => {
    // localStorage.clear() - clears all the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("experationTime");
    setToken(null);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = (token, expirationTime) => {
    // Saving the token in the browser local storage.
    // that way once a user logged in and refresh the page he will be
    // still logged in
    localStorage.setItem("token", token);
    localStorage.setItem("experationTime", expirationTime);
    setToken(token);

    const remainTime = calcRemmainingTime(expirationTime);
    logoutTimer = setTimeout(logeOutHandler, remainTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logeOutHandler, tokenData.duration);
    }
  }, [tokenData, logeOutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logeOutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
