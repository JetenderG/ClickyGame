import React from 'react';
import "./style.css"

function CurrentScore(props) {

    return (
        <div className="curScore">
            <p className="currentS">Current User Score : <p className="presentScore">{props.score}</p> </p>
        </div>
    )



}


export default CurrentScore;