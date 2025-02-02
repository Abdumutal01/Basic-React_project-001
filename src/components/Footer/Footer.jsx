import React from 'react'
import './Footer.scss'

export default function Footer() {

    const footerArr = [
        {
            id: 1,
            icon: "fa-solid fa-location-dot",
            links: "#"
        },
        {
            id: 2,
            icon: "fa-solid fa-envelope",
            links: "#"
        },
        {
            id: 3,
            icon: "fa-brands fa-instagram",
            links: "#"
        },
        {
            id: 4,
            icon: "fa-brands fa-facebook-f",
            links: "#"
        },
        {
            id: 5,
            icon: "fa-brands fa-youtube",
            links: "#"
        },
        {
            id: 6,
            icon: "fa-brands fa-twitter",
            links: "#"
        },
    ]

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__general">
                    <ul className="footer__iconList">
                        {
                            footerArr.map(item => (
                                <li
                                    key={item.id}
                                    className="footer__item"
                                >
                                    <a
                                        href={item.links}
                                        className="footer__links"
                                    >
                                        <i className={item.icon} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <p className="footer__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis amet tenetur obcaecati nisi odio quibusdam eveniet explicabo tempore repudiandae itaque a dolorum eum ipsa, aliquam maiores, dolorem, voluptate expedita nemo?
                    </p>
                </div>
            </div>
        </footer>
    )
}
