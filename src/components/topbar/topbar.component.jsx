import React from "react";
import Airbnb from "../../assets/images/Airbnb.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <img src={Airbnb} alt="The official airbnb logo" className="logo" />
            <div className="middle">
                <p>Anyweek</p>
                <hr />
                <p>Anywhere</p>
                <hr />
                <p>Add guest</p>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            </div>
            <div className="end">
                <p>Become a host</p>
                    <FontAwesomeIcon icon={faGlobe} className="globe-icon"/>
                <div className="user">
                    <FontAwesomeIcon icon={faBars} className="bar-icon"/>
                    <FontAwesomeIcon icon={faUser} className="user-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;