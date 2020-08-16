import React from "react";
import { connect } from "react-redux";
import Page from "./Page"

class UnitedState extends React.Component {
  componentWillMount() {
    fetch("https://api.openbrewerydb.org/breweries/search?query=united_state")
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch({ type: "success", payload: json });
      })
      .catch((error) => this.props.dispatch(error));
  }

  render() {
    

    return (
      <div>
        <h1>Brewery in UnitedState</h1>
        <Page/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(UnitedState);