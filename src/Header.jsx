import React from 'react'
import logo from './images/logo.png'
const Header = () => {
    return (
        <>
            <div className='header' >
                <img className='logo' src={logo} alt="logo" />
                <h3>Akki Keep</h3>
            </div>
        </>
    )
}

export default Header