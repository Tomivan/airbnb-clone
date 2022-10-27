import React from "react";
import { data } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import "./main.css";

const Main = () => {
    console.log(data[0].houses)
    return(
        <div className="main">
            {data[0].houses.map(data => (<div className="house">
                <div className="top">
                    <img src={data.src} alt={data.alt} className="house-image"/>
                    <FontAwesomeIcon icon={faHeart} className="love"/>
                </div>
                <div className="bottom">
                    <div className="info">
                        <p>{data.name}</p>
                        <p>{data.host}</p>
                        <p>{data.date}</p>
                        <p>{data.cost}</p>
                    </div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <p>{data.ratings}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default Main;