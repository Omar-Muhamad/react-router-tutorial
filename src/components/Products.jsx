import { NavLink as Link, Outlet } from "react-router-dom";
import { activeLinkStyles } from "./Navbar";

const Products = () => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search products"
        className="border-2 p-2"
      />
      <h1>Nested Routes</h1>
      <nav className="text-lg font-semibold flex gap-2">
        <Link to="featured" className={activeLinkStyles}>Featured</Link>
        <Link to="new" className={activeLinkStyles}>New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Products;
