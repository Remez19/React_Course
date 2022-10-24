import { Route, Switch, Redirect } from "react-router-dom"; // A component that let us define a certine path and the component that should be render
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            {/* This is a dynamic path segment -> tells react router that the overall path that of this page sould be loaded   
           Will be something like this: our-domain.com/product-detail/anything (can be p1 p2 or whatever)
        */}
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
/*
<Route path="/welcome"/> - with that we saying - this route should be active when this:
our-domain.com/welcome will be active  

*/
