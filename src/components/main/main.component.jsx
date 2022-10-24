import React from "react";
import { Data } from "../../data";
import "./main.css";

const Main = () => {
    console.log(Data)
    return(
        <div className="main">
            <div className="house">
                <div className="top">
                    <img src="" alt="" className="house-image"/>
                    <img src="" alt="" className="like"/>
                </div>
                <div className="bottom">
                    <p>Name of the listing</p>
                    <p>Listing's Host</p>
                    <p>Date available</p>
                    <p>Cost per night</p>
                    <div className="rating">
                        <img src="" alt="" className="star" />
                        <p>Ratings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;