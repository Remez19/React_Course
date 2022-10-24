import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The Products in our store </h1>
      <ul>
        <li>
          <Link to="/products/p1">Computer</Link>
        </li>
        <li>
          <Link to="/products/p2">Book</Link>
        </li>
        <li>
          <Link to="/products/p3">PS5</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
