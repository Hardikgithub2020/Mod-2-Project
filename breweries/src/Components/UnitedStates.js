import React from "react";
import CallUseEffect from './CallUseEffect'



class UnitedStates extends React.Component {
  
  // UNSAFE_componentWillMount() {
  
  //   fetch("https://api.openbrewerydb.org/breweries/search?query=united_state&sort=-state,-city,-type,-name")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.props.dispatch({ type: "success", payload: json });
  //     })
  //     .catch((error) => this.props.dispatch(error));
  // }

  

  render() {
    // const { data } = this.props;
    return (
      // <div className='search-Bar'>
      //   <h3>Breweries in UnitedState</h3>
      //   <h3>No of Breweries : { data.length }</h3>
      //   <Page/>
      // </div>
      <CallUseEffect/>
     
    );
  }
}
export default UnitedStates;

// const mapStateToProps = (state) => state;

// export default connect(mapStateToProps)(UnitedStates);
