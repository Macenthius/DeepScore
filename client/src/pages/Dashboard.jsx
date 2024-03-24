import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Form from "../components/Form";
import Line from "../components/Line"; // Import the Form component

export default function Dashboard() {
    const { user } = useContext(UserContext);
    return (
        <>
            <div className='h-screen w-screen flex'>
                <Header heading={"DeepScore Dashboard"} />
                <div className='grow flex justify-start items-center bg-gray-900'>
                    <Navbar />
                    <div className='grow h-full pt-20 flex justify-center items-center p-3 gap-3'>
                        <div className='bg-gray-800 grow h-full text-black p-4'>
                            <Line />
                        </div>
                        <div className='bg-gray-800 grow h-full text-black p-4'>
                            <Form /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
