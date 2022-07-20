import React from "react";
import "./Header.css";
import blcLogo from "../images/blc_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={blcLogo} alt="BLC Logo" />

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_navOption">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_navOption">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_optionBasket">
          
          <ShoppingCartIcon className="shoppingCartIcon"></ShoppingCartIcon>
          <span className="header_optionLineTwo header_basketCount ">0</span>
        </div>

        {/* <div className="header_navOption"></div> */}
      </div>
    </div>
  );
}

export default Header;
