import React from 'react';


function CurrentScore(props){

    return(


        <div className = "curScore">
            <p>Current User Score :  {props.score}</p>
        </div>

    )



}


export default CurrentScore;