import React, { useEffect } from "react";

export default function User({ getUsers, userData }) {
  useEffect(() => {
    getUsers();
    console.log(userData);
  }, [getUsers, userData]);
  return <div>test</div>;
}
