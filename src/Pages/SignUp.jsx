import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

  const [issignupData, setIsSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    city: "",
    state: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsSignupData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issignupData);
  }

  return (
    <div className='py-6'>
      <div className="max-w-md mx-auto  bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* <!-- First Name & Last Name --> */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input type="text" name='firstname' value={issignupData.firstname} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="John" required />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input type="text" name='lastname' value={issignupData.lastname} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="Doe" required />
            </div>
          </div>

          {/* <!-- Email --> */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name='email' value={issignupData.email} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="you@example.co/m" required />
          </div>

          {/* <!-- Password & Confirm Password --> */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" name='password' value={issignupData.password} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="••••••••" required />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" name='confirmpassword' value={issignupData.confirmpassword} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="••••••••" required />
            </div>
          </div>

          {/* <!-- Gender --> */}
          <div>
            <label className="block text-gray-700">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" checked={issignupData.gender === "male"} onChange={handleInputChange} className="mr-2" required /> Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" checked={issignupData.gender === "female"} onChange={handleInputChange} className="mr-2" required /> Female
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Other" checked={issignupData.gender === "other"} onChange={handleInputChange} className="mr-2" required /> Other
              </label>
            </div>
          </div>

          {/* <!-- City --> */}
          <div>
            <label className="block text-gray-700">City</label>
            <input type="text" name='city' value={issignupData.city} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none" placeholder="Enter your city" required />
          </div>

          {/* <!-- State --> */}
          <div>
            <label className="block text-gray-700">State</label>
            <select name='state' value={issignupData.state} onChange={handleInputChange} className="w-full p-2 border rounded-lg focus:outline-none " required>
              <option value="" disabled>Select your state</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
            </select>
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" className="w-full bg-[#ffbb38] cursor-pointer text-white p-2 rounded-lg">
            Sign Up
          </button>

          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <NavLink to='/login' className="text-blue-500 hover:underline">Login</NavLink>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp