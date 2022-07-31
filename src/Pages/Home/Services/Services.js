import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data));


    },[])
    return (
        <div id='services' className='bg-gray-200 font-serif'>
            <h2 className='text-4xl text-center font-semibold w-full text-sky-900 mt-5' > Our Services</h2>
            <div className='lg:grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-5 my-auto '>
                {
                    services.map(service=> <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            
            </div>
        </div>
    );
};

export default Services;