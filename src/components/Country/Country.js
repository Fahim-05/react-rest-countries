import './Country.css'
import React from 'react';

const Country = (props) => {
    const {area, region, name, flags}=props.country;
    return (
        <div className='country bg-warning shadow-lg'>
            <h2>{name.common}</h2>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
            <img src={flags.png} className="flags shadow-lg" alt="" />
        </div>
    );
};

export default Country;