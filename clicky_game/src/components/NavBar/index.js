import React from "react"



function NavBar(props) {

    

        return (


            <ul className="navbar justify-content-center  sticky-top">
                <li className="nav-item">
                <p>Helllo</p>
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                    {props.hiScore}
                </li>

            </ul>



        )



    






}

export default NavBar;