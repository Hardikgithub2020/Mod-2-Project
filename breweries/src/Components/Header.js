import React from 'react';
import MyRouter from "./MyRouter";
import CallUseEffect from './CallUseEffect';
import Footer from './Footer';

function Header(props) {
    return (
        <div className='main-Header'>
        <h1 className='main-Title'>BREWERIES </h1>
        
        <MyRouter />
        <Footer/>
       
        </div>
    );
}

export default Header;