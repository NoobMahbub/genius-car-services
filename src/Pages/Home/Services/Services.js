import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useServices from '../../../Components/hooks/useServices';
import Service from '../Home/Service/Service';
import './Services.css';



const Services = () => {
    const [services] = useServices();

    return (
        <div>
            <h1 id='services' className='services-title text-primary'>Our Services</h1>

            <div className='services-container container '>


                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>

    );
};

export default Services;