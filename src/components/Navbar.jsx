import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  const activeLinkStyles = ({ isActive }) =>
    isActive ? "underline underline-offset-4" : "hover:text-sky-500";

  return (
    <nav className="h-20 w-full shadow-md flex items-center px-8 gap-4 text-lg font-semibold ">
      <Link to="/" className={activeLinkStyles}>
        Home
      </Link>
      <Link to="/about" className={activeLinkStyles}>
        About
      </Link>
    </nav>
  );
};
export default Navbar;
