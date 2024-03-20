import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Dashboard() {
    const { user } = useContext(UserContext);
    return (
        <>
            <div className='h-screen w-screen flex'>
                <Header heading={"DeepScore Dashboard"} />
                <div className='grow flex justify-start items-center bg-gray-900'>
                    <Navbar />
                </div>
                    <div class="container mx-auto p-24 m-5">
                        <div class="flex">
                            <div class="w-1/2 bg-green-500 text-white p-4">
                            Chart goes here!
                        </div>
                        <div class="w-1/2 bg-green-400 p-4 col-span-10">
                            Form goes here!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
