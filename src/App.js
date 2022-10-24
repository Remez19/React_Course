import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-contex";
import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
function App() {
  const authContext = useContext(AuthContext);
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!authContext.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {authContext.isLoggedIn && <ProfilePage />}
            {!authContext.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          {authContext.isLoggedIn && (
            <Route path="/profile">
              <ProfilePage />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
