import React from 'react';

const Trainer = ({trainer}) => {
    const{name,image}= trainer;
    return (
        <div>
            <div className="flex justify-center  mx-auto mb-3">
                <div className="rounded-lg shadow-lg bg-white max-w-sm border border-solid">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg w-full p-2 border" src={image} alt=""/>
                    </a>
                    <div className="p-6 bg-slate-300 text-center">
                        <h5 className=" text-xl font-medium mb-2 font-serif font-medium">Name: {name}</h5>
                    <button type="button" className="font-serif inline-block px-6 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Choose Trainer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;