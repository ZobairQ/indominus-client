import React, { useEffect } from "react";
import UpgradeGoldMineButton from "./UpgradeGoldMineButton";
import UpgradeHouseButton from "./UpgradeHouseButton";
import { gql, useQuery } from "@apollo/client";
import { connect } from "react-redux";
import {
  queryCitydata,
  getGold,
  getGoldMineLevel,
  getHouseLevel,
  getMilitaryBaseLevel,
  getmilitaryPower,
} from "../../store/city/citites";
import UpgradeMilitaryBaseButton from "./UpgradeMilitaryBaseButton";
import { createStructuredSelector } from "reselect";

interface CityProps {
  setCurrentBuildingData: Function;
  cityId: any;
  gold: any;
  goldMineLevel: any;
  houseLevel: any;
  militaryBaseLevel: any;
  militaryPower: any;
}

const City = (props: CityProps) => {
  const { setCurrentBuildingData } = props;

  const { cityId } = props;
  const query = gql`
      query {
        cityById(id: "${cityId}") {
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
  if (
    props.gold === 1000 &&
    props.militaryPower === 0 &&
    props.houseLevel === 1 &&
    props.militaryBaseLevel === 1 &&
    props.goldMineLevel === 1
  ) {
    setCurrentBuildingData(data.cityById);
  }
  return (
    <div className="city">
      <div className="row">
        <div className="u-center-text">
          <h2 className="city__name u-margin-bottom-small">
            {data.cityById.name}
          </h2>
          <p className="city__stats">
            Gold: <span className="city__stats--gold">{data.cityById.gold}</span>{" "}
            &mdash; Military Power:{" "}
            <span className="city__stats--power">{props.militaryPower}</span>
          </p>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">Gold Mine</h3>
              <p className="city__building--level">
                level {props.goldMineLevel}
              </p>
              <UpgradeGoldMineButton cityID={cityId} />
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">House</h3>
              <p className="city__building--level">level {props.houseLevel}</p>
              <UpgradeHouseButton cityID={cityId} />
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="city__card">
              <h3 className="city__building">Military Base</h3>
              <p className="city__building--level">
                level {props.militaryBaseLevel}
              </p>
              <UpgradeMilitaryBaseButton
                cityID={cityId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  gold: getGold,
  goldMineLevel: getGoldMineLevel,
  houseLevel: getHouseLevel,
  militaryBaseLevel: getMilitaryBaseLevel,
  militaryPower: getmilitaryPower,
});

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => ({
  setCurrentBuildingData: (city: any) => dispatch(queryCitydata(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
