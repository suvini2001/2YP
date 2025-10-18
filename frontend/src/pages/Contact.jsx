import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {


  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="text-center mb-14">
        <div className="inline-flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-2">
            <svg className="w-12 h-12 text-blue-900 drop-shadow-md mr-2 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="url(#blueContactGradient)" strokeWidth="2.5" fill="url(#blueContactGradientFill)" />
              <defs>
                <linearGradient id="blueContactGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e3a8a" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
                <radialGradient id="blueContactGradientFill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span className="text-5xl font-extrabold text-blue-900 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent select-none">
              CONTACT <span className="text-blue-600">US</span>
            </span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-full mb-2 shadow-md animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-blue-100">
        <img 
          src={assets.contact_image} 
          alt="Contact us" 
          className="w-full md:w-1/2 max-w-md rounded-2xl shadow-lg object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
        />
        <div className="flex-1 text-gray-800 space-y-8 md:pl-10">
          <div className="pb-4 border-b border-blue-100">
            <p className="font-semibold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">Our Office</p>
            <p className="text-sm md:text-base text-gray-500">Colombo <br /> Sri Lanka</p>
          </div>
          <div className="pb-4 border-b border-blue-100">
            <p className="font-semibold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">Contact</p>
            <p className="text-sm md:text-base text-gray-500">+94 123 456 789 <br /> info@example.com</p>
          </div>
          <div>
            <p className="font-semibold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">Careers at DocOp</p>
            <p className="text-sm md:text-base text-gray-500 mb-4">Learn more about our team and job opportunities</p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-bold hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/20">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact