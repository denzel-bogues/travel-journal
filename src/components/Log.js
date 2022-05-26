import React from "react";


export default function Log (props){
    return(
        <div className="log">
            <img className="log--image" src={`./images/${props.imgUrl}`} alt="Image of place traveled" />
            <div className="log--info">
                <div className="log--location">
                    <img className="locationIcon" src="../images/location-icon.png" alt="Pinpoint icon for locations" />
                    <p className="log--locationInfo">{props.location}</p>
                </div>
                    <h1 className="log--title">{props.title}</h1>
                    <p className="log--date">{props.date}</p>
                    <p className="log--description">{props.description}</p>
            </div>
        </div>
    )
}