import React from "react";

import "./style.css"


function ClickBox(props) {



        return (

                <div className="imgCard" dataset={props.id}>

                        <img alt={props.animal} src={props.images} ></img>

                </div>

        )











}



export default ClickBox;