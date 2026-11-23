import { useEffect, useState } from "react"

export default function UserList() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {user.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
