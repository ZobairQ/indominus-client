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
    <div className="city">
      <div className="row">
        <div className="u-center-text">
          <h2 className="city__name u-margin-bottom-small">
            {data.cityById.name}
          </h2>
          <p className="city__stats">
            Gold:{" "}
            <span className="city__stats--gold">{data.cityById.gold}</span>{" "}
            &mdash; Military Power:{" "}
            <span className="city__stats--power">
              {data.cityById.militaryPower}
            </span>
          </p>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">Gold Mine</h3>
              <p className="city__building--level">
                level {data.cityById.goldMineLevel}
              </p>
              <a href="#" className="btn btn--green u-margin-top-small">
                Upgrade
              </a>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">House</h3>
              <p className="city__building--level">
                level {data.cityById.houseLevel}
              </p>
              <a href="#" className="btn btn--green u-margin-top-small">
                Upgrade
              </a>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">Military Base</h3>
              <p className="city__building--level">
                level {data.cityById.militaryBaseLevel}
              </p>
              <a href="#" className="btn btn--green u-margin-top-small">
                Upgrade
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
