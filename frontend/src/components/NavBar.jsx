import {assets} from '../assets/assets_frontend/assets' 
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu,setShowMenu]=useState(false);
  const [token,setToken]=useState(true);

  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <img onClick={()=>navigate('/')} className='w-44 h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity' src={assets.logo} alt="Logo" /> 
      <ul className='hidden md:flex items-center gap-6 font-medium'>
        <NavLink to="/" className={({isActive}) => `relative group ${isActive ? 'text-blue-600' : ''}`}>
            <li className='px-6 py-2.5 rounded-lg transition-all duration-300
                         border-2 border-transparent hover:border-blue-600
                         hover:bg-blue-50 hover:shadow-md
                         group-hover:scale-105 transform'> 
              HOME
              <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
            </li>
        </NavLink>

        <NavLink to="/doctors" className={({isActive}) => `relative group ${isActive ? 'text-blue-600' : ''}`}>
            <li className='px-6 py-2.5 rounded-lg transition-all duration-300
                         border-2 border-transparent hover:border-blue-600
                         hover:bg-blue-50 hover:shadow-md
                         group-hover:scale-105 transform'> 
              ALL DOCTORS
              <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
            </li>
        </NavLink>

        <NavLink to="/about" className={({isActive}) => `relative group ${isActive ? 'text-blue-600' : ''}`}>
            <li className='px-6 py-2.5 rounded-lg transition-all duration-300
                         border-2 border-transparent hover:border-blue-600
                         hover:bg-blue-50 hover:shadow-md
                         group-hover:scale-105 transform'> 
              ABOUT
              <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
            </li>
        </NavLink>

        <NavLink to="/contact" className={({isActive}) => `relative group ${isActive ? 'text-blue-600' : ''}`}>
            <li className='px-6 py-2.5 rounded-lg transition-all duration-300
                         border-2 border-transparent hover:border-blue-600
                         hover:bg-blue-50 hover:shadow-md
                         group-hover:scale-105 transform'> 
              CONTACT
              <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
            </li>
        </NavLink>
      </ul>
      <div className=' flex item-center gap-2 cursor-pointer group relative'>
        {token ? (<div className="flex items-center gap-2"> 
                        <img className='w-10 h-10 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-3 h-3 text-black font-medium filter brightness-0' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-normal text-black-600 z-20 hidden group-hover:block'>
                          <div className='bg-white shadow-lg rounded-lg p-4 min-w-[200px]'>
                            <p onClick={() => navigate('/My-profile')} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>My Profile</p>
                            <p onClick={() => navigate('/My-appointments')} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>My Appointment</p>
                            <p onClick={() => setToken(false)} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Logout</p>
                          </div>
                        </div>
                </div>) : (
          <div>
            <button onClick={() => navigate('/login')} className='bg-white text-black px-8 py-3 rounded-full font-bold hidden md:block border-2 border-blue-800 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300'>
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar