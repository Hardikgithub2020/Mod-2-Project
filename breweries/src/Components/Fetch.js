import React from "react";
import { connect } from "react-redux";

class Fetch extends React.Component {
  componentWillMount() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch({ type: "success", payload: json });
      })
      .catch((error) => this.props.dispatch(error));
  }
  
  render() {
    const { data } = this.props;
    console.log('data',data)
    const listInHTML = data.map((brewery, i) => {
        return (
          <div key={i}>
        <h1 style={{color:'greenyellow'}}> {brewery.name} </h1>
        <p> Id : {brewery.id} </p>
        <p> City : {brewery.city} </p>
        <p> Country : {brewery.country} </p>
        <p> Phone: {brewery.phone} </p>
        <p> State : {brewery.state} </p>
        <p> Street : {brewery.street} </p>
        <p> Website : {brewery.website_url} </p>

        {/* brewery_type: "micro"
city: "Birmingham"
country: "United States"
id: 2
latitude: "33.5p521"
longitude: "-86.7p322"
name: "Avondale Brewing Co"
phone: "205777p56"
postal_code: "35222-1932"
state: "Alabama"
street: "201p1st St S"
updated_at: "2018-08-23T23:19:57.825Z"
website_url: "http://www.avondalebrewing.com" */}
       
        </div>
        );
      });
    
    return (
      <div>
        <h1>Hi I am Fetch component</h1>
        {listInHTML}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Fetch);
