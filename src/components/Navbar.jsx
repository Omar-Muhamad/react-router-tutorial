import { NavLink as Link } from "react-router-dom";

export const activeLinkStyles = ({ isActive }) =>
  isActive ? "underline underline-offset-4" : "hover:text-sky-500";

const Navbar = () => {
  return (
    <nav className="h-20 w-full shadow-md flex items-center px-8 gap-4 text-lg font-semibold ">
      <Link to="/" className={activeLinkStyles}>
        Home
      </Link>
      <Link to="/about" className={activeLinkStyles}>
        About
      </Link>
      <Link to="/products" className={activeLinkStyles}>
        Products
      </Link>
      <Link to="/users" className={activeLinkStyles}>
        Users
      </Link>
    </nav>
  );
};
export default Navbar;
