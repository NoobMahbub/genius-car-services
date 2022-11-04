import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        "id": 1,
        "name": "Will Smith",
        "img": "https://i.ibb.co/f9gmV6w/image.png"
    },
    {
        "id": 2,
        "name": "Tom Cruise",
        "img": "https://i.ibb.co/2SNQTg8/image.png"
    },
    {
        "id": 3,
        "name": "Tom Hanks",
        "img": "https://i.ibb.co/LYrJSRh/image.png"
    },
    {
        "id": 4,
        "name": "Robert Downey Jr",
        "img": "https://i.ibb.co/Z1yD0Hy/image.png"
    },
    {
        "id": 5,
        "name": "Johnny Depp",
        "img": "https://i.ibb.co/n1wRx6S/image.png"
    },
    {
        "id": 6,
        "name": "Leonardo DiCaprio",
        "img": "https://i.ibb.co/xgT9rxY/image.png"
    }
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 id='experts' className='text-primary text-center'>Our Experts</h1>

            <div className='row justify-content-evenly gap-3'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;