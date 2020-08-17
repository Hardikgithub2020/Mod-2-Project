import React, { Component } from 'react';
import Page from './Page';
import {connect} from 'react-redux'

class State extends Component {
    constructor(props){
        super(props)
        this.state={
            stateName : 'ohio'
        }
    }
    UNSAFE_componentWillMount() {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.stateName}`)
          .then((res) => res.json())
          .then((json) => {
            this.props.dispatch({ type: "success", payload: json });
          })
          .catch((error) => this.props.dispatch(error));
      }
    handlesubmit=(e)=> {
            fetch("https://api.openbrewerydb.org/breweries?by_state=${e.target.value}")
              .then((res) => res.json())
              .then((json) => {
                this.props.dispatch({ type: "success", payload: json });
              })
              .catch((error) => this.props.dispatch(error));
          }
    // Hoe can i use user input for a serach
    render() {
        return (
            <div>
                <h1>Search Breweries by state </h1>
                <form obSubmit={this.handlesubmit}>
                    <input name='stateName' type='text' value={this.state.stateName} onChange={(event)=>this.setState({stateName : event.target.value})} />
                    <input type='submit' value='search'/>
                </form>
                <Page/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(State);