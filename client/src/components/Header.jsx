import React from "react";

const Header = ({ heading }) => {
    return (
        <div className='bg-gray-800 flex justify-center items-center h-16 w-full fixed top-0'>
            <h1 className='text-3xl text-white font-bold mb-4 text-center rounded-lg'>
                {heading}
            </h1>
        </div>
    );
};

export default Header;
