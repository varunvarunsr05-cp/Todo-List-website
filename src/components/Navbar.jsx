import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-600 text-white flex   py-2.5 justify-between md:justify-around'>
      <div className="logo  font-extrabold  text-xl ">iTask</div>
      <ul  className='flex gap-5'>
        <li className='hover:font-bold transition-all text-lg ' >Home</li>
        <li className='hover:font-bold transition-all text-lg mx-2.5' >Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
