import React from 'react';
import MyRouter from "./MyRouter";

function Header(props) {
    return (
        <div className='main-Header'>
        <h1 className='main-Title'>BREWERIES </h1>
        <MyRouter />
        </div>
    );
}

export default Header;