import { assets } from "../assets/assets_frontend/assets"


const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* -------Left Section---------- */}
                <div className="flex items-center gap-4">
                    <img src={assets.logo} alt="Logo" className="h-12 w-auto" />
                    <p className="text-gray-600 text-sm max-w-md"> 
                        Your Health, Our Priority. We care about your well-being. Book an appointment today!
                    </p>
                </div>

                {/* -------Middle Section---------- */}
                <div className="space-y-4">
                    <p className="font-semibold text-gray-900">COMPANY</p>
                    <ul className="space-y-2">
                        <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Home</li>
                        <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                        <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Contact Us</li>
                        <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                {/* -------Right Section---------- */}
                <div className="space-y-4">
                    <p className="font-semibold text-gray-900">GET IN TOUCH</p>
                    <ul className="space-y-2">
                        <li className="text-gray-600 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +1 234 567 890
                        </li>
                        <li className="text-gray-600 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@example.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* -------Copyright Section---------- */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm">&copy; 2025 DocOp. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer