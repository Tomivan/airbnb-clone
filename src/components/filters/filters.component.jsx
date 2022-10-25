import React from "react";
import { data } from "../../data";
import "./filters.css";

const Filters = () => {
    console.log(data[0].filters)
    return(
        <div className="filters">
            {data[0].filters.map(data => (<div className="home-type">
                <img src={data.src} alt={data.alt} className="filter-icon"/>
                <p>{data.name}</p>
            </div>))}
            <button className="filter-button"><img src="" alt="" />Filters</button>
        </div>
    )
}

export default Filters;