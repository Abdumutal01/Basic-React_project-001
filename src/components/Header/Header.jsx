import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.avif'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">
                        <img src={logo} alt="" className="header__logoImg" />
                    </div>

                    <li>
                        <a className='header__tel' href="tel:+998900100110">
                            <i className="fa-solid fa-phone" />
                            <span>
                                +998900100110
                            </span>
                        </a>
                    </li>
                </nav>
            </div>
        </header>
    )
}
