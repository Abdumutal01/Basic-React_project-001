import React from 'react'
import './Home.scss'
import Slider from './Slider/Slider'
import HomeBoxes from './HomeBoxes/HomeBoxes'
import HomeHero from './HomeHero/HomeHero'
import Header from '../Header/Header'
export default function Home() {
    return (
        <section className='home'>
            <Header />
            <Slider />
            <HomeBoxes />
            <HomeHero />
        </section>
    )
}
