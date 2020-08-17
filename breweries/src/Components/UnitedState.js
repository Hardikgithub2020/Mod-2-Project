import React from "react";
import { connect } from "react-redux";
import Page from "./Page"

class UnitedState extends React.Component {
  componentWillMount() {
    fetch("https://api.openbrewerydb.org/breweries/search?query=united_state&sort=-state,-city,-type,-name")
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch({ type: "success", payload: json });
      })
      .catch((error) => this.props.dispatch(error));
  }

  

  render() {
    const { data } = this.props;
    const listOfState = [...new Set(data.map((brewery) => brewery.state))]; // Method used to remove allduplicate entries
    const listOfCity = [...new Set(data.map((brewery) => brewery.city))];
    const listOfBreweryType = [...new Set(data.map((brewery) => brewery.brewery_type)),
    ];
    

    return (
      <div>
        <h3>Breweries in UnitedState</h3>
        <p> No of Breweries : { data.length }</p>
        <Page/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(UnitedState);
