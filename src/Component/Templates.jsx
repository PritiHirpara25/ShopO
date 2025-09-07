import apple_smartWatch from '../assets/apple_smartWatch.png'
import gameXbox from '../assets/gameXbox.png'
import samsung_phone from '../assets/samsung_phone.png'

function Templates() {
  return (
    <div>
      {/* Templates */}
      <div className='container sm:mx-auto flex flex-col sm:flex-row gap-4 px-4 xl:gap-14 pt-16'>
        <div>
          <img src={samsung_phone} alt="samsung phone image" className='w-[950px] h-full max-w-full object-center ' />
        </div>
        <div className='flex justify-between sm:flex-col sm:gap-14'>
          <img src={apple_smartWatch} alt="smartwatch image" className='w-[140px] sm:w-[500px] h-auto ' />
          <img src={gameXbox} alt="gamexbox image" className='w-[140px] sm:w-[500px] h-auto ' />
        </div>
      </div>
    </div>
  )
}

export default Templates
