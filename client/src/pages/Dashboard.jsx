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
            </div>
        </>
    );
}
