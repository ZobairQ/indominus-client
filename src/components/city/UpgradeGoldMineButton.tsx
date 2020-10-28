import React from "react";
import { gql, useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { upgradeGoldMine } from "../../store/city/citites";

interface ButtonProps {
  cityID: String;
  updateGoldMine: Function;
}

const UpgradeGoldMineButton = (props: ButtonProps) => {
  const UPGRADE_BUILDING = gql`
  mutation {
    incrementGoldMineLevel(id: "${props.cityID}") {
      goldMineLevel
    }
  }
`;

  const [incrementBuildingLevel, { data }] = useMutation(UPGRADE_BUILDING);
  const { updateGoldMine } = props;
  return (
    <div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          incrementBuildingLevel().then((res) => {
            updateGoldMine(res.data.incrementGoldMineLevel);
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
  updateGoldMine: (city: any) => dispatch(upgradeGoldMine(city)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradeGoldMineButton);
