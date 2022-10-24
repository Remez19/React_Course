import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // to enable the route

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// To make a use of the route component we need to warp our App component with
// BrowserRouter as shown here.
