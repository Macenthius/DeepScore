import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='h-screen w-screen flex'>
                <div className='bg-gray-800 flex justify-center items-center h-16 w-full fixed top-0'>
                    <h1 className='text-3xl text-white font-bold mb-4 text-center rounded-lg'>
                        Welcome to DeepScore!
                    </h1>
                </div>
                <div className='grow flex justify-start items-center bg-gray-900'>
                    <div className='w-16 h-full pt-16'>
                        <nav className=' h-full  flex flex-col bg-gray-800 text-white shadow-lg'>
                            <Link
                                to='/'
                                className='flex items-center justify-center h-16 w-full hover:bg-gray-700'
                            >
                                <span className='text-xs'>Home</span>
                            </Link>
                            <Link
                                to='/register'
                                className='flex items-center justify-center h-16 w-full hover:bg-gray-700'
                            >
                                <span className='text-xs'>Register</span>
                            </Link>
                            <Link
                                to='/login'
                                className='flex items-center justify-center h-16 w-full hover:bg-gray-700'
                            >
                                <span className='text-xs'>Login</span>
                            </Link>
                        </nav>
                    </div>
                    <div className='grow h-full pt-20 flex justify-center items-center p-3 gap-3'>
                        <div className='bg-gray-600 grow h-full'>DIV ON</div>
                        <div className='bg-red-700 grow h-full '>DIV TWO</div>
                    </div>
                </div>
            </div>
        </>
    );
}
