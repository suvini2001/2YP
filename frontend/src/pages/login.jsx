import { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-gradient-to-br from-blue-900 to-blue-700 p-10 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform hover:scale-105 transition-transform duration-300">
        <div className="w-full">
          <h2 className="text-4xl font-extrabold text-center text-white mb-4 drop-shadow-2xl">{state === "Sign Up" ? "Create an account" : "Login"}</h2>
          <p className="text-center text-white text-opacity-80 mb-8">Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment.</p>
          {state === "Sign Up" && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
              <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="w-full px-4 py-3 border border-white border-opacity-30 bg-white bg-opacity-20 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-60 transition-all duration-200" placeholder="Enter your name"/>
            </div>
          )}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="w-full px-4 py-3 border border-white border-opacity-30 bg-white bg-opacity-20 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-60 transition-all duration-200" placeholder="Enter your email"/>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full px-4 py-3 border border-white border-opacity-30 bg-white bg-opacity-20 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-60 transition-all duration-200" placeholder="Enter your password"/>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-xl hover:from-blue-500 hover:to-indigo-500 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
            {state === "Sign Up" ? "Create an account" : "Login"}
          </button>
          {/* Removed 'Create Account' button from Login box */}
          {/* Removed 'Back to Login' button from Sign Up box */}
          {state === "Sign Up" && (
            <p className="text-center text-white text-opacity-80">Already have an account? <span onClick={() => setState('Login')} className="text-blue-300 cursor-pointer hover:text-blue-100 font-semibold transition-colors duration-200">Login here</span></p>
          )}
          {state === "Login" && (
            <p className="text-center text-white text-opacity-80">Create a new account? <span onClick={() => setState('Sign Up')} className="text-blue-300 cursor-pointer hover:text-blue-100 font-semibold transition-colors duration-200">Click here</span></p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;