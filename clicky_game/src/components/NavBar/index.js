import React from "react"



function NavBar(props) {



    return (



        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <p>Helllo</p>


                </li>
                <li className="nav-item">
                    <span>{props.score}</span>
                </li>
                <li>

                    <p>{props.hiScore}</p>


                </li>
            </ul>
        </nav>



    )










}

export default NavBar;