import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Coupan from '../Component/Coupan'
import Footer from '../Component/Footer'

const Payment = () => {

  const cartData = useSelector(state => state.cart);

  // total 
  const total = cartData.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className=''>

      {/* Payment Heading */}
      <div className='bg-[#fffaef] flex justify-center relative'>
        <div className='absolute top-10 lg:left-55'>
          <NavLink to='/'>Home</NavLink> / Payment
        </div>
        <p className='font-bold text-3xl my-20'>Payment</p>
      </div>

      <div className='mt-20 mb-20 flex flex-col lg:flex-row gap-x-8 container mx-auto'>

        <div className='w-full'>
          <h1 className='font-semibold text-xl pl-2'>Payment Methods</h1>
          <div className='shadow-md my-5 md:p-5'>
            {/* UPI */}
            <div className='mx-2 '>
              <div className='flex space-x-2 '>
                <input className='accent-pink-500' name='option' type="radio" />
                <label>UPI</label>
              </div>
              <div className='mx-5'>
                <label>please enter your UPI ID</label>
                <div className='flex items-center gap-x-5 my-2'>

                  <input type="text" className='border border-gray-400 rounded-md focus:outline-none p-1 px-2' placeholder='UPI ID' />
                  <button className='bg-[#ffbb38] rounded-sm px-2 p-1 cursor-pointer'>verify</button>
                </div>
                <label>The UPI ID is in the format of name/phone number@bankname</label>
              </div>
            </div>
            <hr className='text-gray-300 m-5' />
            {/* direct bank transfer */}
            <div className='mx-2 my-5 '>
              <div className='space-x-2'>
                <input className='accent-pink-500' name='option' type="radio" />
                <label>Bank Transfer</label>
              </div>
              <div className='mx-5 my-2'>
                <select name="" id="" className='border border-gray-400 rounded-sm md:w-72 p-1 focus:outline-none'>
                  <option value="">HDFC Bank</option>
                  <option value="">State Bank of India</option>
                  <option value="">ICICI Netbanking</option>
                  <option value="">Axis Bank</option>
                  <option value="">Bank of Baroda</option>
                  <option value="">Kotak Bank</option>
                </select>
              </div>
            </div>
            <hr className='text-gray-300 m-5' />
            {/* cresit / debit / ATM card */}
            <div className='mx-2 my-5 '>
              <div className='space-x-2'>
                <input type="radio" className='accent-pink-500' name='option' />
                <label>Credit / Debit / ATM Card</label>
              </div>
              <div className='mx-5'>
                <div className='my-1'>
                  <label>Card Number</label><br />
                  <input type="number" placeholder='xxxx xxxx xxxx' className='border border-gray-400 rounded-md focus:outline-none p-1 px-2 my-2' />
                </div>
                <div className='flex flex-col md:flex-row gap-x-4 my-2'>
                  <div className=''>
                    <label>Valid Thru</label><br />
                    <input type="text" placeholder='MM/YY' className='border border-gray-400 rounded-md focus:outline-none p-1 px-2 my-2' />
                  </div>
                  <div className=''>
                    <label>CVV</label><br />
                    <input type="text" placeholder='CVV' className='border border-gray-400 rounded-md focus:outline-none p-1 px-2 my-2' />
                  </div>
                </div>

              </div>
            </div>
            <hr className='text-gray-300 m-5' />
            {/* Cash On Delivery */}
            <div className='mx-2 space-x-2 my-5 pb-5 '>
              <input className='accent-pink-500' name='option' type="radio" />
              <label>Cash on Delivery / Pay on Delivery</label>
            </div>
          </div>
        </div>

        <div className='shadow-md px-8 w-full mt-12 h-fit'>
          <div className='text-gray-400 my-5'>
            PRICE DETAILS
          </div>
          <hr className='text-gray-300 m-5' />
          <div className='space-y-5'>
            <div className='flex justify-between'>
              <p>Price</p>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <p>Delivery Charges</p>
              <span>$3</span>
            </div>
            <div className='flex justify-between'>
              <p>Platform Fees</p>
              <span>$0.5</span>
            </div>
          </div>
          <hr className='text-gray-300 m-5' />
          <div className='flex justify-between font-semibold text-xl my-7'>
            <p>Total</p>
            <span className='text-red-600'>${total + 3 + 0.5}</span>
          </div>
          <div>
            <button className='bg-black text-white w-full mb-10 py-2'>Pay</button>
          </div>
        </div>
      </div>

      <div className='mt-36'>
        <Coupan />
        <Footer />
      </div>

    </div>
  )
}

export default Payment