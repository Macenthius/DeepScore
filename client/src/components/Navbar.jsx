import { Link } from "react-router-dom";

export default function Navbar() {
    return (
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
    );
}
