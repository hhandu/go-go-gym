import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(()=>{
        fetch('generated.json')
            .then(res=>res.json())
            .then(data=>setTrainers(data));

    },[])
return (
    <div id='trainers' className='my-12 bg-black'>
        <h2 className='text-4xl text-center font-semibold w-full font-serif text-red-500  py-3' > Our Trainers</h2>
        <div className='lg:grid lg:grid-cols-3 sm:grid-cols-1 gap-3 mx-5 my-auto '>
            {   
               trainers.map(trainer =><Trainer
                 key={trainer.id}
                 trainer={trainer}
               ></Trainer>)
            }
    
        </div>
    </div>
    );
};

export default Trainers;