import React from "react"



class NavBar extends React.Component {

    render() {

        return (


            <ul className="navbar justify-content-center  sticky-top">
                <li className="nav-item">
                    <a className="nav-link">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Link</a>
                </li>
                <li className="nav-item">
                    <a classNames="nav-link ">Disabled</a>
                </li>
            </ul>



        )



    }






}

export default NavBar;