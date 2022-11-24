import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        console.log(process.env.REACT_APP_API_URL);
        fetch(`${process.env.REACT_APP_API_URL}/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, []);
    return (
        <div>
            <h2>Welcome to {service?.name}</h2>
        </div>
    );
};

export default ServiceDetail;