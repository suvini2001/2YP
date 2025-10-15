import {assets} from '../assets/assets_frontend/assets' 
import { NavLink,useNavigate } from 'react-router-dom'


const NavBar = () => {
  const navigate = useNavigate();
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
      <div>
        <button onClick={()=>navigate('/login')} className='bg-primary text-black px-8 py-3 rounded-full font-bold hidden md:block '>Create Account</button>
      </div>
    </div>
  )
}

export default NavBar