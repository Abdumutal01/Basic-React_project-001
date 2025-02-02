import React from 'react'
import './HomeBoxes.scss'

// import images 
import icon1 from '../../../assets/images/binoculars_icon.png'
import icon2 from '../../../assets/images/revision.png'
import icon3 from '../../../assets/images/fire.png'

export default function HomeBoxes() {

    const boxexArr = [
        {
            id: 1,
            img: `${icon1}`,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            id: 2,
            img: `${icon2}`,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            id: 3,
            img: `${icon3}`,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        }
    ]

    return (
        <div className='general container'>
            {
                boxexArr.map(item => (
                    <div
                        key={item.id}
                        className='boxes'
                    >
                        <p className='boxes__text'>
                            {item.text}
                        </p>
                        <img
                            src={item.img}
                            alt=""
                            className="boxes__images"
                        />
                    </div>
                ))
            }
        </div>
    )
}
