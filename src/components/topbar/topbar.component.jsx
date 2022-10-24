import React from "react";
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <img src="" alt="The official airbnb logo" className="logo" />
            <div className="middle">
                <p>Anyweek</p>
                <hr />
                <p>Anywhere</p>
                <hr />
                <p>Add guest</p>
                <img src="" alt="an icon for search"  className="search-icon"/>
            </div>
            <div className="end">
                <p>Become a host</p>
                <img src="" alt="" />
                <div className="user">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;