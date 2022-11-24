import { Skeleton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useLoading from '../../../../Components/hooks/useLoading';
// import Skeleton from '../../../../Components/Skeleton/Skeleton.tsx';
import './Expert.css';
const Expert = ({ expert }) => {
  const { name, img} = expert;
  


  const [Loading] = useLoading();
// console.log(Loading);  
  // useEffect(()=>{
  //   // setLoading(false);
  //     });

    return (

      Loading ? <Skeleton/> : <div className="card border-0 shadow-lg p-1 mx-1 g-5 col-sm-12 col-md-6 col-lg-4" style={{ width: "20rem" }}>
          <div>
            <img src={img} className="card-img-top img-fluid rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/NotFound' className="btn btn-primary btn-center">View Profile</Link>
            </div>
          </div>
        </div>
    
      );
  }


export default Expert;