import React from "react";
import { gql, useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { upgradeMiltaryBase } from "../../store/city/citites";
interface ButtonProps {
  cityID: String;
  updateMilitaryBaseLevel: Function;
}

const UpgradeMilitaryBaseButton = (props: ButtonProps) => {
  const UPGRADE_BUILDING = gql`
  mutation {
    incrementMilitaryBaseLevel(id: "${props.cityID}") {
      militaryBaseLevel
    }
  }
`;

  const [incrementBuildingLevel, { data }] = useMutation(UPGRADE_BUILDING);
  const { updateMilitaryBaseLevel } = props;
  return (
    <div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          incrementBuildingLevel().then((res) => {
            updateMilitaryBaseLevel(res.data.incrementMilitaryBaseLevel);
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
  updateMilitaryBaseLevel: (city: any) => dispatch(upgradeMiltaryBase(city)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradeMilitaryBaseButton);
