import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data } = await axios.post("/register", {
                name,
                email,
                password,
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                toast.success("Registration Successful. Please login.");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='h-screen w-screen flex'>
                <Header heading={"DeepScore Dashboard"} />
                <div className='grow flex justify-start items-center bg-gray-700'>
                    <Navbar />
                    <div className='grow h-full pt-20 flex justify-center items-center p-3 gap-3'>
                        {/* Login form container */}
                        <div>
                            <h1 className='text-3xl text-white font-bold mb-4 text-center'>
                                {" "}
                                Register to join
                            </h1>
                            <form
                                onSubmit={registerUser}
                                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                            >
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                                        Name
                                    </label>
                                    <input
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder='Enter name...'
                                        value={data.name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                                        Email
                                    </label>
                                    <input
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        type='email'
                                        placeholder='Enter email...'
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className='mb-6'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                                        Password
                                    </label>
                                    <input
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                        type='password'
                                        placeholder='Enter password...'
                                        value={data.password}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <button
                                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                        type='submit'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
