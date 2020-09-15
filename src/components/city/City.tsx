import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, Box } from "@material-ui/core";

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
      <div>City Name: {data.cityById.name}</div>
      <div>City Gold: {data.cityById.gold}</div>
      <div>City Power: {data.cityById.militaryPower}</div>
      <div>Gold Mine : {data.cityById.goldMineLevel}</div>
      <div>House: {data.cityById.houseLevel}</div>
      <div>Military Base: {data.cityById.militaryBaseLevel}</div>
      <Box component="span" m={1}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      </Box>
    </div>
  );
};

export default City;
