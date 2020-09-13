import React, { Component } from "react";
import { gql, useQuery } from "@apollo/client";

class City extends Component {
  render() {
    const query = gql`
      {
        query {
          cityById(id: "") {
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
      }
    `;

    return <div></div>;
  }
}

export default City;
