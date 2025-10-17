import { assets } from "../assets/assets_frontend/assets"


const header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20">
        {/*--------Left side--------*/}

        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 m-auto md:pt-[5w] md:mb-[-30px] -mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight lg:leading-tight relative">
          <span className="block mb-3 font-black bg-gradient-to-r from-blue-950 to-blue-900 bg-clip-text text-transparent animate-fade-in-down">Your health</span>
          <span className="block mb-3 font-black bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent animate-fade-in-down animation-delay-200">Your doctor</span>
          <span className="block font-bold bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 bg-clip-text text-transparent relative animate-fade-in-up animation-delay-400 hover:scale-105 transition-transform duration-300">
            just a click away
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-950 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </h1>
        <div>
            <img src={assets.group_profiles} alt="Group profiles" className="w-20 h-auto" />
            <p className="text-gray-700 text-lg mt-6 leading-relaxed"> 
              Find experienced and trusted doctors <br />
              compare their profiles and <br /> 
              book your appointment online in minutes. <br />
              <span className="font-bold text-2xl mt-4 block text-gray-800">SAFE  SIMPLE and STRESS-FREE.</span>
            </p>
        </div>
        <a href="#speciality" className="flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 px-10 py-4 rounded-full text-white text-lg font-bold m-auto md:m-0 hover:scale-105 hover:shadow-xl hover:from-blue-800 hover:to-blue-600 transform transition-all duration-300 shadow-md border border-blue-400/20">
            Book Appointment 
            <img className="w-5 filter brightness-0 invert transition-transform group-hover:translate-x-1" src={assets.arrow_icon} alt="" />
        </a>

        </div>



        {/*--------Right side--------*/}
         <div className="md:w-1/2 relative">
          <img 
            className="w-full md:absolute bottom-0 h-auto md:h-[104%] md:scale-126 md:translate-x-5 object-cover rounded-lg" 
            src={assets.header_img} 
            alt="Medical professionals" 
          />
         </div>
    </div>
  )
}

export default header