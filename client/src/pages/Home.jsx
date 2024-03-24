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
                            <p className=" text-2xl">
                                DeepScore, A Project by Divij Kulkarni <br></br>
                                Join Us Today! <br></br>
                                <br></br>
                                DeepScore stands as a beacon of innovation in the realm of academic advancement, meticulously crafted by the visionary mind of Divij Kulkarni. This groundbreaking project serves as a quintessential aide, ushering students into a new era of scholastic excellence. Central to its brilliance is DeepScore's ingenious methodology, which intricately captures and catalogues students' academic scores across diverse subjects and assessments. Through its astute data analysis algorithms, DeepScore not only curates this wealth of information but also transforms it into an immersive experience of discovery and self-awareness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
