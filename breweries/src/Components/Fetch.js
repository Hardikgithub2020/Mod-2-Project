import React from 'react';
import {connect} from "react-redux";

class Fetch extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        fetch("https://api.openbrewerydb.org/breweries")
        .then (res=> res.json())
        .then (json => {
            console.log('json',json);
            this.props.dispatch({type:"success",payload:json})
            console.log('data',this.props.data)
        }).catch(error=>this.props.dispatch(error))
    }
    
    render(){
        return(
            <h1>Hi I am Fetch component</h1>
        )
        }
}



// class function extends React.Component{
//     constructor(props){
//         super(props)
//     }
    
//     componentWillMount() {
//         fetch("https://api.openbrewerydb.org/breweries")
//         .then(response=>response.json())
//         .then (json=>{
//             console.log('Data',json);
//             this.props.dispatch({
//                 type:'success',
//                 payload:json
//             })
//         })
        
//     }
    
//     return (
//         <div>
            
//         </div>
//     );
// }
const mapStateToProps=(state)=>state;

export default connect(mapStateToProps)(Fetch);

