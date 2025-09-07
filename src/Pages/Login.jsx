import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [isloginData, setIsLoginData] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });
  // console.log(isloginData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isloginData);
  }

  return (
    <div className='py-10 md:py-14 lg:py-44'>
      <div className="max-w-md  mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <!-- Email --> */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" name='email' value={isloginData.email} placeholder="you@example.com" onChange={handleInputChange} required />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" name='password' value={isloginData.password} placeholder="••••••••" onChange={handleInputChange} required />
          </div>

          {/* <!-- Confirm Password --> */}
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" name='confirmpassword' value={isloginData.confirmpassword} placeholder="••••••••" onChange={handleInputChange} required />
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" className="w-full bg-[#ffbb38] cursor-pointer text-white p-2 rounded-lg">
            Login
          </button>

          {/* <!-- Forgot Password & Sign Up Link --> */}
          <div className="text-center mt-4">
            {/* <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a> */}
            {/* <span className="mx-2">|</span> */}
            <span>Don't have an account? </span>
            <NavLink to='/signup' className="text-blue-500 hover:underline">Sign Up</NavLink>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Login