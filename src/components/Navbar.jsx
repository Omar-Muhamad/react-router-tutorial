import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 w-full shadow-md flex items-center px-8 gap-4 text-lg font-semibold">
      <Link to="/" className="hover:text-sky-500">
        Home
      </Link>
      <Link to="/about" className="hover:text-sky-500">
        About
      </Link>
    </nav>
  );
};
export default Navbar;
