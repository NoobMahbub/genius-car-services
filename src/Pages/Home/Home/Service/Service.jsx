import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const {id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
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