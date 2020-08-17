import React, { Component } from "react";
import Page from "./Page";
import { connect } from "react-redux";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: " State ",
      cityName:'City',
      brewery_type:"Planning/Micro / Brewpub /Contract / Regional / large /Proprietor/Closed/bar",
    };
  }
  UNSAFE_componentWillUpdate() {
    fetch(
      `https://api.openbrewerydb.org/breweries/?by_state=${this.state.stateName}&by_city=${this.state.cityName}&by_type=${this.state.brewery_type}&per_page=50&sort=city,type,name`
    )
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch({ type: "success", payload: json });
      })
      .catch((error) => this.props.dispatch(error));
  }

  // handlesubmit=(e)=> {
  //         fetch("https://api.openbrewerydb.org/breweries?by_state=${e.target.value}")
  //           .then((res) => res.json())
  //           .then((json) => {
  //             this.props.dispatch({ type: "success", payload: json });
  //           })
  //           .catch((error) => this.props.dispatch(error));
  //       }
  // How can i use user input for a serach
  render() {
    const { data } = this.props;
    const listOfState = [...new Set(data.map((brewery) => brewery.state))]; // Method used to remove allduplicate entries
    const listOfCity = [...new Set(data.map((brewery) => brewery.city))];
    const listOfBreweryType = [...new Set(data.map((brewery) => brewery.brewery_type)),
    ];
    return (
      <div>
        <h1>Search Breweries by State, City and Brewery_type </h1>
        {/* <form onSubmit={this.fetchPosts}> */}
        State
        <input
          name="stateName"
          type="text"
          value={this.state.stateName}
          onChange={(event) => this.setState({ stateName: event.target.value })}
        />
        
         : City
        <input
          name="cityName"
          type="text"
          value={this.state.cityName}
          onChange={(event) => this.setState({ cityName: event.target.value })}
        />
        : Brewery_type
        <input
          name="cityName"
          type="text"
          value={this.state.brewery_type}
          onChange={(event) => this.setState({brewery_type: event.target.value })}
        />
        <p> No of Breweries : { data.length }</p>
        {/* <input type='submit' value='search'/> */}
        {/* </form> */}
        <Page />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(State);
