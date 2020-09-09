import React from "react";
import { gql, useQuery } from "@apollo/client";

const UserPage = () => {
  const query = gql`
    query {
      user(username: "Madleb") {
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
      <p>The users name is : {data.user.name}</p>
      <p>
        The name of city that belongs to {data.user.name} is{" "}
        {data.user.city[0].name} and the has {data.user.city[0].gold} gold
      </p>
    </div>
  );
};

export default UserPage;
