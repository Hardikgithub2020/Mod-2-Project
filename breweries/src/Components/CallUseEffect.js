import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Page from './Page';
import{fetchPosts} from '../actions/postActions';

const CallUseEffect = ({ dispatch, loading,data, hasErrors }) => {

    //useEffect is function like componentdidmount it run once without calling,
    //In  useEffect, if you write any event after comma, function run every time when event happen
    useEffect(() => {
        dispatch(fetchPosts());
        return ()=>{
            dispatch({type :'success', payload:[]})
        }
    }, []);
   
    //    Show loading, error, or success fetch
    const renderData = () => {
        if (loading) {
        return <p> One Sec...Loading Data</p>;
        }
        else if (hasErrors) {
        return <p>Unable to display Data</p>;
        }
        // if(posts === undefined){
        //     posts=[];
        // }
        // console.log(posts);
        else{
        return <Page/>;
        }
    };
    
    return (
        <section>
        <div className='search-Bar'>
        <h3>Breweries in UnitedState</h3>
        <h3>No of Breweries : { data.length }</h3>
        {renderData()}
        </div>
        {/* <Page/>
      </div>
        <h1>Posts</h1> */}
        
        </section>
    );
};

// Map Redux state to the React component Props
// mapStateToProps is redux inbuilt function
//first argument is always as store.getState()->(You ans write any name it takes store state value)
// secomd argument is "ownprops" which is optional 
const mapStateToProps = (State) => ({
  loading: State.loading,
  data: State.data,
  hasErrors:State.hasErrors,
});


// Connecting Redux to React
export default connect(mapStateToProps)(CallUseEffect);

//export default (PostsPage);