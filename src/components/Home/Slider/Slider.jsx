import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import HomeBoxes from '../HomeBoxes/HomeBoxes';

// import slider-images 
import sliderImg1 from '../../../assets/images/slider-img-test1.jpg'
import sliderImg2 from '../../../assets/images/slider-img-test2.jpg'
import sliderImg3 from '../../../assets/images/slider-img-test3.jpg'
import sliderImg4 from '../../../assets/images/slider-img-test4.jpg'
import sliderImg5 from '../../../assets/images/slider-img-test5.jpg'


export default function Slider() {

    const sliderImgs = [
        {
            id: 1,
            img: `${sliderImg1}`
        },
        {
            id: 2,
            img: `${sliderImg2}`
        },
        {
            id: 3,
            img: `${sliderImg3}`
        },
        {
            id: 4,
            img: `${sliderImg4}`
        },
        {
            id: 5,
            img: `${sliderImg5}`
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 10000, 
                    disableOnInteraction: false, 
                }}

                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    sliderImgs.map(item => (
                        <SwiperSlide
                            key={item.id}
                            style={{ backgroundImage: `url(${item.img})` }}
                        />
                    ))
                }


            </Swiper>
        </>
    );
}
