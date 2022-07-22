import React from "react";
import "./Header.css";
import blcLogo from "../../images/blc_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={blcLogo} alt="BLC Logo" />

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__navOption">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          
          <ShoppingCartIcon className="shoppingCartIcon"></ShoppingCartIcon>
          <span className="header__optionLineTwo header__basketCount ">0</span>
        </div>

      </div>
      </div>
  );
  
}

export default Header;
