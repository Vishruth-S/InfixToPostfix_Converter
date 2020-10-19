import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import Logo from '../../Assets/imgs/i2plogo2.png'
import svg from '../../Assets/imgs/gh_svg.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-brand" ><img className="nav-logo" alt="Infix2Postfix_logo" src={Logo} /></span>
            <img src={svg} className="gh-svg" alt="github-icon" />
            <span className="navbar-link">Star me on Github</span>
        </div>
    )
}

export default Navbar
