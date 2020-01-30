import React from "react";
import "./style.css";

const MultiCardScore = (props) =>
{
    return (
        <div className="mt-4 score-div">
            <div className="row no-gutters">
                <div className="col-md-6 personal-rank-text">{props.id}</div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6 score-text">Score: </div>
                <div className="col-md-6 data-text">{props.score}</div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6 score-text">Level: </div>
                <div className="col-md-6 data-text">{props.level}</div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6 score-text">Lines: </div>
                <div className="col-md-6 data-text">{props.lines}</div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6 score-text">Date: </div>
                <div className="col-md-6 data-text">{props.date}</div>
            </div> 
        </div>
    );
}

export default MultiCardScore;