import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../../Components/hooks/useServices';
import auth from '../../../../firebase.init';


const ManageServices = () => {
    const [services, setServices] = useServices();
    // console.log(services);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `${process.env.REACT_APP_API_URL}/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        alert('Service deleted successfully');
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }
    };
    const user = useAuthState(auth);
    const navigate = useNavigate();
    if (!user) {
        navigate('/login');

    }
    return (

        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>X</button></h5>

                </div>)
            }
        </div>

    );
};

export default ManageServices;