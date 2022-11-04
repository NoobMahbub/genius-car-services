import React from 'react';

const Footer = () => {
    return (
        <div className='text-center'>
            <p><small>The Car Doctor © {(new Date().getFullYear())}</small></p>
        </div>
    );
};

export default Footer;