import React, { Component } from "react";
import Page from "./Page";
import { connect } from "react-redux";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: '',
      cityName:'',
      brewery_type:'',
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
    const {stateName}=this.props;
    const {breweryType}=this.props;
    // Method used to remove allduplicate entries
    const cityName = [...new Set(data.map((brewery) => brewery.city))];
   
    const stateNameDataList=stateName.map((nameOfstate,i)=><option key={i} value={nameOfstate}/>);
    const breweryTypeDataList=breweryType.map((type,i)=><option key={i} value={type}/>);
    const cityDataList=cityName.map((city,i) => <option key={i} value={city}/>);
    return (
      <div className='search-Bar'>
        <h2>Search Breweries by State, City and Brewery_type </h2>
        {/* <form onSubmit={this.fetchPosts}> */}
        <span>State  ::</span>
        <input
          list='state'
          name="stateName"
          type="text"
          value={this.state.stateName}
          onChange={(event) => this.setState({ stateName: event.target.value })}
        />
        <datalist id='state'>
            {stateNameDataList}
        </datalist>
        
        <span>City  </span> 
        <input
        list='cityData'
          name="cityName"
          type="text"
          value={this.state.cityName}
          onChange={(event) => this.setState({ cityName: event.target.value })}
        />
        <datalist id='cityData'>
            {cityDataList}
        </datalist>
        <span>Brewery_type </span>
        <input
          list='brewryTypeData'
          name="cityName"
          type="text"
          value={this.state.brewery_type}
          onChange={(event) => this.setState({brewery_type: event.target.value })}
        />
        <datalist id="brewryTypeData">
            {breweryTypeDataList}
        </datalist>
        <p> No of Breweries : { data.length }</p>
        {/* <input type='submit' value='search'/> */}
        {/* </form> */}
        <Page />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Search);
