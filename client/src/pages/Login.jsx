import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // Hook to navigate between pages
  const navigate = useNavigate();

  // State to manage form data
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Function to handle form submission
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      // Sending login request to server
      const { data } = await axios.post('/login', {
        email,
        password
      });

      // Checking server response
      if (data.error) {
        // Display error message if login fails
        toast.error(data.error);
      } else {
        // Clear form data and navigate to dashboard if login successful
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      // Log error to console if request fails
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Fixed header */}
      <div className='bg-gray-800 flex justify-center items-center h-16 w-full fixed top-0'>
        <h1 className="text-3xl text-white font-bold mb-4 text-center rounded-lg"> DeepScore Login </h1>
      </div>
      {/* Login form container */}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl text-black font-bold mb-4 text-center">Welcome, User! Please Login</h1>
        {/* Form */}
        <div>
          <form onSubmit={loginUser} className="mb-4">
            {/* Email input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='email'
                placeholder='Enter email...'
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            {/* Password input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type='password'
                placeholder='Enter password...'
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            {/* Submit button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
