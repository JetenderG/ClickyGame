import React from "react"



class NavBar extends React.Component {

    render(props) {

        return (


            <ul className="navbar justify-content-center  sticky-top">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                    {props.hiScore}
                </li>

            </ul>



        )



    }






}

export default NavBar;