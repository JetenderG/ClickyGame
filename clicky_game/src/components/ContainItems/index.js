import React from 'react';
import "./style.css"

function CurrentScore(props){

    return(
        <div className = "container containItems">
            {props.children}
        </div>
    )



}


export default CurrentScore;