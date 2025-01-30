import React from 'react'
import { NETFLIX_LOGO_URL } from '../constants/constant'

const Header = () => {
  return (
    <div className=' py-2 px-8 absolute bg-gradient-to-b from-black w-full z-10 cursor-pointer'>
      <img className='w-44 mx-24 brightness-125' src={NETFLIX_LOGO_URL} alt="LOGO" srcset="" />
    </div>
  )
}

export default Header
