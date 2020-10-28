import React from "react";
import { gql, useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { upgradeHouse } from "../../store/city/citites";
interface ButtonProps {
  cityID: String;
  updateHouseLevel: Function;
}

const UpgradeHouseButton = (props: ButtonProps) => {
  const UPGRADE_BUILDING = gql`
  mutation {
    incrementHouseLevel(id: "${props.cityID}") {
        houseLevel
      }
  }
`;

  const [incrementBuildingLevel, { data }] = useMutation(UPGRADE_BUILDING);
  const { updateHouseLevel } = props;
  return (
    <div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          incrementBuildingLevel().then((res) => {
            updateHouseLevel(res.data.incrementHouseLevel);
          });
        }}
        className="btn btn--green u-margin-top-small"
      >
        Upgrade
      </a>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => ({
  updateHouseLevel: (city: any) => dispatch(upgradeHouse(city)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UpgradeHouseButton);
