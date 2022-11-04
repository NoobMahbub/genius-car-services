import React from 'react';
// import './Expert.css';
const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="card col-md-4  border-0 shadow-lg g-0" style={{ width: "19rem" }}>
      <div>
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary btn-center">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Expert;