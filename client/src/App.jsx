import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard  from './pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <div className=' bg-gray-900 text-white flex justify-start items-center flex-col min-h-screen'>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
      </div>
    </UserContextProvider>
  )
}

export default App