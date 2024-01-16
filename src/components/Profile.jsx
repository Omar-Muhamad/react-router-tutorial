import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="p-4">
      <h1 className="text-xl pb-4">Welcome <span className="font-bold text-red-400">{auth.user}</span></h1>
      <button onClick={handleLogout} className="border-2 px-2 rounded-md">Logout</button>
    </div>
  );
};
export default Profile;
