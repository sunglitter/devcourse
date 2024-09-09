import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

const UserListFetching = () => {
  const { data, error, isLoading } = useQuery({});

  return (
    <div>
      <h3>사용자 정보</h3>
      {data.map((user) => (
        <div key={user.id}></div>
      ))}
    </div>
  );
};

export default UserListFetching;
