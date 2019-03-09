import React from "react";




class ClickBox extends React.Component {


    render(props) {

        return (

            <div className="card">
                <div className="img-coontainer">

                    <img alt={props.id} src={props.image} ></img>
            
                </div>
            </div>

        )





    }





}



export default ClickBox;