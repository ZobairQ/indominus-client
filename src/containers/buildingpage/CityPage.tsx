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
        <City currentUser={this.props.currentUser} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
