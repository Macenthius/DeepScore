import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <div className='h-screen w-screen flex'>
                <Header heading={"Welcome to DeepScore!"} />
                {/* navbar */}
                <div className='grow flex justify-start items-center bg-gray-900'>
                    <Navbar />
                    {/* DIVS */}
                    <div className='grow h-full pt-20 flex justify-center items-center p-3 gap-3'>
                        <div className='bg-gray-600 grow h-full text-white p-4'>
                            <p>PARAGRAPH HERE</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
