import React from 'react';
import "./style.css"

function CurrentScore(props){

    return(
        <div className = "curScore">
            <p className ="currentS">Current User Score :  {props.score}</p>
        </div>
    )



}


export default CurrentScore;