import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-600 text-white flex justify-around py-2.5'>
      <div className="logo  font-extrabold  text-xl ">iTask</div>
      <ul  className='flex gap-10'>
        <li className='hover:font-bold transition-all text-lg ' >Home</li>
        <li className='hover:font-bold transition-all text-lg' >Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
