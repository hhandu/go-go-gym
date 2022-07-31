import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,image,price,description} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    };

    return (
        <div>
            <div className=" justify-center ml-5 my-3 ">
                <div className="rounded-lg shadow-lg bg-white max-w-sm border border-solid border-slate-200 border-r-2 ">
                    <a href="#!">
                        <img className="rounded-t-lg w-full p-2" src={image} alt=""/>
                    </a>
                <div className="p-6 bg-neutral-200 ">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">$ {price}</p>
                    <p className="text-gray-700 text-base mb-4 text-justify">{description}</p>
                <button onClick={()=> navigateToServiceDetail(id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{name}</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;