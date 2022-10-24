import React from "react";
import { Data } from "../../data";
import "./filters.css";

const Filters = () => {
    console.log(Data)
    return(
        <div className="filters">
            <div className="home-type">
                <img src="" alt="" />
                <p>OMG!</p>
            </div>
            <button className="filter-button"><img src="" alt="" />Filters</button>
        </div>
    )
}

export default Filters;