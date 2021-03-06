import React, { Component } from "react";
import City from "../../components/city/City";
import { connect } from "react-redux";
import { getCurrentUser } from "../../store/user/users";
import { createStructuredSelector } from "reselect";

interface CityPageProps {
  currentUser: any;
}
export class CityPage extends Component<CityPageProps> {
  render() {
    return (
      <div>
        <div className="row">
          <div className="u-center-text">
            <h1 className="heading-primary">The Cities</h1>
          </div>
        </div>

        {
        this.props.currentUser.city.map((c: { id: any }) => (
        <City key={1} cityId={c.id}></City>
        ))
        }

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
