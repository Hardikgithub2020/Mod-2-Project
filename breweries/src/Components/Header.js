import React from "react";
import MyRouter from "./MyRouter";
import Footer from "./Footer";

function Header(props) {
  return (
    <div className="main-Header">
      {/* <Footer/> */}
      <Footer />
      <h1 className="main-Title">BREWERIES </h1>
      <MyRouter />
    </div>
  );
}

export default Header;
