import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-16 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow-lg">
      <Link to='/' className="flex items-center justify-center h-16 w-full hover:bg-gray-700"> 
        <span className="text-xs">Home</span> 
      </Link>
      <Link to='/register' className="flex items-center justify-center h-16 w-full hover:bg-gray-700"> 
        <span className="text-xs">Register</span> 
      </Link>
      <Link to='/login' className="flex items-center justify-center h-16 w-full hover:bg-gray-700"> 
        <span className="text-xs">Login</span> 
      </Link>
    </nav>
  );
}
