import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.has("ray"));
  const changeURL = () => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  };
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={changeURL}>Change URL</button>
    </div>
  );
}

export default Home;
