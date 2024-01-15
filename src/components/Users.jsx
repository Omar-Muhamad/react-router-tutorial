import { Link, Outlet, useSearchParams } from "react-router-dom";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
  { id: "3", fullName: "Omar Muhammad" },
];

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <h1>Dynamic Routes</h1>
      <button
        onClick={() => setSearchParams({ filter: "active" })}
        className="border-2 px-4 py-2"
      >
        Active users
      </button>
      <button
        onClick={() => setSearchParams({})}
        className="border-2 px-4 py-2"
      >
        Reset filter
      </button>
      {showActiveUsers ? <h2>Active Users</h2> : <h2>All Users</h2>}
      <nav>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{`> ${user.fullName}`}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Users;
