import React from "react";
import { gql, useQuery } from "@apollo/client";

interface CityProps {
  currentUser: any;
}

const City = (props: CityProps) => {
  const { currentUser } = props;
  const query = gql`
      query {
        cityById(id: "${props.currentUser.city[0].id}") {
          id
          name
          gold
          militaryPower
          population
          goldMineLevel
          houseLevel
          militaryBaseLevel
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
  return (
    <div>
      <div>{data.cityById.name}</div>
      <div>{data.cityById.gold}</div>
      <div>{data.cityById.militaryPower}</div>
      <div>{data.cityById.goldMineLevel}</div>
      <div>{data.cityById.houseLevel}</div>
    </div>
  );
};

export default City;
