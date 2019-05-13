import React from 'react';
import "./style.css"

function Hiscore(props){

    return(


        <div className = "styleHiS">
            <p className="highS"> HiScore :{props.hiScore}</p>
        </div>

    )



}


export default Hiscore;