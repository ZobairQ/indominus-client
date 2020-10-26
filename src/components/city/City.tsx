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
    <div className="row">
      <div className="main">
        <div className="city-con">
          <h1>{data.cityById.name}</h1>
          <div className="city-gold">City Gold: {data.cityById.gold}</div>
          <div className="city-power">
            City Power: {data.cityById.militaryPower}
          </div>
        </div>
        <div className="container">
          <div className="gold-mine-level-con">
            <h2>Gold Mine</h2>
            <p>Level {data.cityById.goldMineLevel}</p>
            <a href="#" className='btn btn-full'>Upgrade</a>
          </div>

          <div className="house-level-con">
            <h2>House</h2>
            <p>Level {data.cityById.houseLevel}</p>
            <a href="#" className='btn btn-full'>Upgrade</a>
          </div>

          <div className="military-base-level-con">
            <h2>Military Base</h2>
            <p>Level {data.cityById.militaryBaseLevel}</p>
            <a href="#" className='btn btn-full'>Upgrade</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
