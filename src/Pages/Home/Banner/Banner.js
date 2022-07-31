import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/fxXMt2q/banner.png')] h-96 w-full bg-cover bg-center p-24 mt-5 border-r-2">
            <div className="md:w-1/2 text-2xl text-orange-500 text-left">
                <p className="font-bold text-4xl uppercase"><span className='text-indigo-500'>Go GO Gym!</span></p>
                <p className="mb-10 leading-none text-3xl mt-2"> Take Your Fitness To Next Level</p>
            </div>  
        </div>
        
    );
};

export default Banner;