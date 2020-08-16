import React, { Component } from 'react';

class Fetch extends Component {
    constructor(props){
        super(props)
        
        this.state={
            data : []
        }
    }
    componentDidMount(){
        fetch("https://api.openbrewerydb.org/breweries")
        .then(response=>response.json())
        .then (json=>console.log(json))
    }
    render() {
        return (
            <div>
                <h1>Hi I am fetch Component</h1>
            </div>
        );
    }
}

export default Fetch;