import React from 'react'
import samsung_phone from '../assets/samsung_phone.png'
import apple_smartWatch from '../assets/apple_smartWatch.png'
import gameXbox from '../assets/gameXbox.png'

function Templates() {
  return (
    <div>
      {/* Templates */}
      <div className='container  mt-6 flex justify-between'>
        <div>
          <img src={samsung_phone} alt="samsung phone image" className='w-full h-full max-w-full '/>
        </div>
        <div className='flex flex-col gap-4'>
          <img src={apple_smartWatch} alt="smartwatch image" className='w-full h-auto ' />
          <img src={gameXbox} alt="gamexbox image" className='w-full h-auto '/>
        </div>
      </div>
    </div>
  )
}

export default Templates
