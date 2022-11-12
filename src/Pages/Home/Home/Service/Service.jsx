import { Skeleton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import useLoading from '../../../../Components/hooks/useLoading';
// import Skeleton from '../../../../Components/Skeleton/Skeleton.tsx';

const Service = ({ service }) => {
    const {id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    
    const [Loading] = useLoading();
    return (

        Loading? <Skeleton variant="rectangular" height={150} />:<div className='service'>
            <img src={img} alt="" className='rounded'/>
            <div className="service-desc">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary btn-center'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;