import React from "react";

import "./style.css"


function ClickBox(props) {



        return (

                <div onClick={() => props.clickevent(props.id )} className="imgCard" dataset={props.id} >
                        <img alt={props.animal} src={props.images} ></img>
                        
                </div>

        )











}



export default ClickBox;