import React from 'react'
import './HomeHero.scss'

export default function HomeHero() {
    return (
        <div className="hero">
            <h2 className='hero__title'>
                Explore a New Destiny
            </h2>
            <h3 className="hero__inner">
                A New Adventure is Waiting
            </h3>
            <p className="hero__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore est atque nisi quia sint aperiam impedit nostrum dolore reiciendis! Eos?
            </p>
            <a className='hero__link' href="#">
                More
                <i class="fa-solid fa-angles-right" />
            </a>
        </div>
    )
}
