import React from "react";
import { gql, useQuery } from "@apollo/client";

const UserPage = () => {
  const query = gql`
    query {
      user(username: "olep") {
        name
        city {
          name
          gold
          militaryPower
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(query);
  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error);
    return <p>ERROR:</p>;
  }
  if (!data) return <p>Not found</p>;
console.log(data.user);
  return (
    <div>
      <h1>User data</h1>
      <p>The users name is <b>{data.user.name}</b></p>
      <p>
        The name of city that belongs to <b>{data.user.name}</b> is{" "}
        <b>{data.user.city[0].name}</b> and the has <b>{data.user.city[0].gold}</b> gold
      </p>
    </div>
  );
};

export default UserPage;
