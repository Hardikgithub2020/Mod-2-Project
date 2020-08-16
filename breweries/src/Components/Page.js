import React from 'react';
import {connect} from 'react-redux';

function Page(props) {
    const { data } = props;
    console.log("data", data);
    const listInHTML = data.map((brewery, i) => {
      return (
        <div key={i} className='list'>
          <h1 style={{ color: "greenyellow" }}> {brewery.name} </h1>
          <p> Id : {brewery.id} </p>
          <p> City : {brewery.city} </p>
          <p> Country : {brewery.country} </p>
          <p> Phone: {brewery.phone} </p>
          <p> State : {brewery.state} </p>
          <p> Street : {brewery.street} </p>
          <a href={brewery.website_url} style={{ color: "khaki" }}>
            {" "}
            Website : {brewery.website_url}{" "}
          </a>
        </div>
      );
    });
    return (
        <div>
            {listInHTML}
        </div>
    );
}
    
const mapStateToProps= state => state;
export default connect(mapStateToProps)(Page);