import { assets } from "../assets/assets_frontend/assets"


const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-2">
            <svg className="w-10 h-10 text-blue-900 drop-shadow-md mr-2 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="url(#blueGradient)" strokeWidth="2.5" fill="url(#blueGradientFill)" />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e3a8a" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
                <radialGradient id="blueGradientFill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span className="text-5xl font-extrabold text-blue-900 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent select-none">
              About <span className="text-blue-600">US</span>
            </span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-full mb-2 shadow-md animate-pulse"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-xl p-8 md:p-14">
        <img 
          src={assets.about_image} 
          alt="About us" 
          className="w-full md:w-1/2 max-w-md rounded-2xl shadow-lg object-cover border-4 border-blue-100"
        />
        <div className="flex-1 text-gray-800 space-y-7">
          <div>
            <p className="font-extrabold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">Who We Are</p>
            <p className="text-sm md:text-base text-gray-500">We are a trusted digital healthcare platform built to make connecting with doctors easier than ever. Our goal is to bring convenience and confidence to patients by helping them find qualified, verified medical professionals in just a few clicks — anytime, anywhere.</p>
          </div>
          <div>
            <p className="font-extrabold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">What We Do</p>
            <p className="text-sm md:text-base text-gray-500">Our app allows patients to browse top doctors by specialty, check their availability, and book appointments instantly without long waiting times or phone calls. With transparent profiles, ratings, and schedules, we empower patients to make informed healthcare choices from the comfort of their home.</p>
          </div>
          <div>
            <p className="font-extrabold text-2xl md:text-3xl text-blue-800 mb-2 tracking-tight drop-shadow-sm">Our Mission</p>
            <p className="text-sm md:text-base text-gray-500">Our mission is to revolutionize healthcare access through technology, making it simple for everyone to find and book appointments with trusted medical professionals. We believe that quality healthcare should be accessible, efficient, and patient-centric.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-4xl font-extrabold text-blue-800 tracking-tight mb-2">
          Why <span className="text-blue-600">Choose Us ?</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 mt-8 gap-10 justify-center">
        <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 border border-blue-100 px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-md transition-all duration-300 w-full md:w-1/3 items-center hover:scale-105 hover:bg-gradient-to-br hover:from-blue-200 hover:via-blue-100 hover:to-blue-200 hover:border-blue-400 hover:shadow-2xl">
          <div className="mb-3">
            <svg className="w-10 h-10 text-blue-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
            </svg>
          </div>
          <b className="text-blue-600 text-lg font-semibold tracking-wide">Efficiency</b>
          <p className="text-gray-500">Our platform streamlines the process of finding and booking healthcare appointments, saving you time and effort.</p>
        </div>
  <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 border border-blue-100 px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-md transition-all duration-300 w-full md:w-1/3 items-center hover:scale-105 hover:bg-gradient-to-br hover:from-blue-200 hover:via-blue-100 hover:to-blue-200 hover:border-blue-400 hover:shadow-2xl">
          <div className="mb-3">
            <svg className="w-10 h-10 text-blue-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <b className="text-blue-600 text-lg font-semibold tracking-wide">Convenience</b>
          <p className="text-gray-500">With our app you can access healthcare services from the comfort of your home, at any time.</p>
        </div>
  <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 border border-blue-100 px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-md transition-all duration-300 w-full md:w-1/3 items-center hover:scale-105 hover:bg-gradient-to-br hover:from-blue-200 hover:via-blue-100 hover:to-blue-200 hover:border-blue-400 hover:shadow-2xl">
          <div className="mb-3">
            <svg className="w-10 h-10 text-blue-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20h9" />
              <path d="M12 4v16m0 0l-3-3m3 3l3-3" />
            </svg>
          </div>
          <b className="text-blue-600 text-lg font-semibold tracking-wide">Personalization</b>
          <p className="text-gray-500">Our platform learns from your preferences and offer tailored recommendations to enhance your healthcare experience.</p>
        </div>
      </div>
    </div>
  )
}

export default About