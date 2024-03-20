import { useEffect, useState } from "react";
import { GET_USERS_API_URL } from "./utils/url";

interface User {
  id: number;
  name: string;
}

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(GET_USERS_API_URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <p>aaa</p>
    </div>
  );
};
