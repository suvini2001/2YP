import {assets} from '../assets/assets_frontend/assets' 
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu,setShowMenu]=useState(false);
  const [token,setToken]=useState(true);

  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <img className='w-44 h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity' src={assets.logo} alt="Logo" /> 
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to="/">
            <li className='py-1'> HOME</li>
            <hr className='border-non outline-non h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/doctors">
            <li className='py-1' > ALL DOCTORS</li>
            <hr className='border-non outline-non h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/about">
            <li className='py-1'> ABOUT</li>
            <hr className='border-non outline-non h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/contact">
            <li className='py-1'> CONTACT</li>
            <hr className='border-non outline-non h-0.5 bg-primary w-3/5 m-auto hidden' />
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