import React from 'react';
import { useForm } from 'react-hook-form';
const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ console.log(data);
    // console.log(errors);
    console.log(process.env.REACT_APP_API_URL);
        const url = `${process.env.REACT_APP_API_URL}/service`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                console.log(result);
            }
        }
        )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' type="text" placeholder="Name" {...register("name", {})} />
                <input className='mb-2' type="text" placeholder="Description " {...register("description ", {})} />
                <input className='mb-2' type="number" placeholder="Price " {...register("number", {})} />
                <input className='mb-2' type="text" placeholder="Photo Url " {...register("img ", {})} />
                <input type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddService;