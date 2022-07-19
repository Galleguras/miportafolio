import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default () => (
    <Carousel autoPlay>
        <div>
            <img
                alt=""
                src="https://cdn.pixabay.com/photo/2022/06/25/23/41/ladybug-7284337_960_720.jpg"
            />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img
                alt=""
                src="https://cdn.pixabay.com/photo/2022/06/25/23/41/ladybug-7284337_960_720.jpg"
            />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img
                alt=""
                src="https://cdn.pixabay.com/photo/2022/06/25/23/41/ladybug-7284337_960_720.jpg"
            />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
)
