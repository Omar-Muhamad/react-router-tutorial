import { Link, Outlet } from "react-router-dom";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
  { id: "3", fullName: "Omar Muhammad" },
];

const Users = () => {
  return (
    <>
      <nav>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Users;
