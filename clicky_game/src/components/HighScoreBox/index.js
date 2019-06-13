import React from 'react';
import "./style.css"

function Hiscore(props) {

    return (


        <div className="styleHiS">
            <p className="highS"> HiScore :<p className="highScore">{props.hiScore}</p></p>
        </div>

    )



}


export default Hiscore;