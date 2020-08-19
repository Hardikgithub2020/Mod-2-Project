import React from "react";
import { connect } from "react-redux";

function Page(props) {
  const { data } = props;
  // console.log("data", data);

  // const listOfState = data.map((brewery) => brewery.state);

  // const stateList = listOfState.filter(e=> e!=null);
  // const listOfState = [...new Set(data.map((brewery) => brewery.state))]; // Method used to remove allduplicate entries
  // const listOfCity = [...new Set(data.map((brewery) => brewery.city))]; 
  // const listOfBreweryType = [...new Set(data.map((brewery) => brewery.brewery_type))]; 
  //console.log(listOfState,listOfCity,listOfBreweryType);

  // console.log('listOfstate',listOfState);

  const listInHTML = data.map((brewery, i) => {
    return (
      <div key={i} className="list">
        <h1> {brewery.name} </h1>
        <p>Type: {brewery.brewery_type}</p>
        <p> City : {brewery.city} </p>
        <p> Country : {brewery.country} </p>
        <p> Phone: {brewery.phone} </p>
        <p> State : {brewery.state} </p>
        <p> Street : {brewery.street} </p>
        <a href={brewery.website_url} style={{ color: "black" }}>
          {" "}
          Website : {brewery.website_url}{" "}
        </a>
      </div>
    );
  });
  return <div>{listInHTML}</div>;
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Page);
