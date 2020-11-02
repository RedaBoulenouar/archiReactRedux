import React, { useEffect, useState } from "react";

export default function User({ getUsers, userData, addUser }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <ul>
      <li>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input type="button" value="add user" onClick={() => addUser(user)} />
      </li>
      {userData.map((user, index) => (
        <li key={user + index}>{user}</li>
      ))}
    </ul>
  );
}
