import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import Logo from '../../Assets/imgs/i2plogo2.png'
import svg from '../../Assets/imgs/gh_svg.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-brand" ><img className="nav-logo" alt="Infix2Postfix_logo" src={Logo} /></span>
            <a className="gh-link" href="https://github.com/Vishruth-S/InfixToPostfix_Converter/"><img src={svg} className="gh-svg" alt="github-icon" /></a>
            <span className="navbar-link"><a className="gh-link" href="https://github.com/Vishruth-S/InfixToPostfix_Converter/">Star me on Github</a></span>
        </div>
    )
}

export default Navbar
