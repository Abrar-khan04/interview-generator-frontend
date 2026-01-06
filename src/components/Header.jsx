// frontend/src/components/Header.jsx
import React from 'react'
// 💡 Import Link for navigation
import { Link } from 'react-router-dom' 

const Header = () => {
    return (
    <div className="bg-amber-200 p-6 m-0 flex justify-end w-full text-right shadow-md">
    
    {/* 💡 Use Link component for navigation */}
    <Link to="/signup" className='bg-green-100 p-2 rounded-lg ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
      SignUp
    </Link>
    
    {/* 💡 Use Link component for navigation */}
    <Link to="/login" className='bg-green-100 p-2 rounded-lg ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
      Login
    </Link>
    
    </div>
    )
}

export default Header