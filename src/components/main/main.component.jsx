import React from "react";
import { data } from "../../data";
import "./main.css";

const Main = () => {
    console.log(data[0].houses)
    return(
        <div className="main">
            {data[0].houses.map(data => (<div className="house">
                <div className="top">
                    <img src={data.src} alt={data.alt} className="house-image"/>
                    <img src="" alt="" className="like"/>
                </div>
                <div className="bottom">
                    <p>{data.name}</p>
                    <p>{data.host}</p>
                    <p>{data.date}</p>
                    <p>{data.cost}</p>
                    <div className="rating">
                        <img src="" alt="" className="star" />
                        <p>{data.ratings}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default Main;