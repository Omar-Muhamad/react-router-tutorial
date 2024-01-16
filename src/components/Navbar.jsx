import { NavLink as Link } from "react-router-dom";
import { useAuth } from "./auth";

export const activeLinkStyles = ({ isActive }) =>
  isActive ? "underline underline-offset-4" : "hover:text-sky-500";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="h-20 w-full shadow-md flex items-center justify-between px-8 text-lg font-semibold ">
      <div className="nav-links flex gap-4">
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
        <Link to="/profile" className={activeLinkStyles}>
          Profile
        </Link>
      </div>
      {!auth.user && (
        <Link to="/login" className={activeLinkStyles}>
          Login
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
