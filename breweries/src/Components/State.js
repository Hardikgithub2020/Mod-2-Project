import React, { Component } from 'react';
import Page from './Page';
import {connect} from 'react-redux'

class State extends Component {
    componentWillMount() {
        fetch("https://api.openbrewerydb.org/breweries?by_state=ohio")
          .then((res) => res.json())
          .then((json) => {
            this.props.dispatch({ type: "success", payload: json });
          })
          .catch((error) => this.props.dispatch(error));
      }
    
    render() {
        return (
            <div>
                <h1>Breweries in Ohio</h1>
                <Page/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(State);