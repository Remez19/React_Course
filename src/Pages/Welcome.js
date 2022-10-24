import { Route } from "react-router";
const Welcome = () => {
  return (
    <section>
      <h1>Welcome to the main page!</h1>
      <Route path="/welcome/new-user">
        <p>Welcome my new FRIEND!</p>
      </Route>
    </section>
  );
};

export default Welcome;
