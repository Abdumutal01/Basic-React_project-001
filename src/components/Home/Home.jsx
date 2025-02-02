import React from 'react'
import './Home.scss'
import Slider from './Slider/Slider'
import HomeBoxes from './HomeBoxes/HomeBoxes'
import HomeHero from './HomeHero/HomeHero'
export default function Home() {
    return (
        <section className='home'>
            <Slider />
            <HomeBoxes />
            <HomeHero />
        </section>
    )
}
