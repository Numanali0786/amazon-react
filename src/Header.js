import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/Context";
// import { useUserContext } from "./context/userContext";

const Header = () => {
  const { user, dispatch, bagCount } = useAppContext();
  //   const { user, dispatch } = useUserContext();
  return (
    // nav
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://th.bing.com/th/id/R.403822bdd28f45281d4214e697983c9e?rik=BGf51ucKuQFSeg&riu=http%3a%2f%2fimg.talkandroid.com%2fuploads%2f2014%2f06%2fAmazon_Logo_033.jpg&ehk=pKJaAcWlm6wPYP5Lyx%2fUP%2bKuEEjlyG4T1NXZBZKXXFU%3d&risl=&pid=ImgRaw&r=0"
          alt="amazon"
        />
      </Link>

      {/* search bar */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Search for your products"
          className="header__searchInput"
        />
        <button className="header__searchButton">
          <SearchIcon />
        </button>
      </div>

      {/* extras */}

      <div className="header__nav">
        <div className="header__option">
          <span className="small__text">Hello</span>
          {user && (
            <Link to="/login">
              <span
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="large__text"
              >
                Log Out
              </span>
            </Link>
          )}
        </div>
        <div className="header__option">
          <span className="small__text">Returns</span>
          <span className="large__text">& Orders</span>
        </div>
        <div className="header__option">
          <span className="small__text">Your</span>
          <span className="large__text">Prime</span>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <ShoppingBasketIcon className="header__cartLogo" />
          </Link>
          {bagCount}
        </div>
      </div>
    </div>
  );
};

export default Header;
