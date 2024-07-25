import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between py-4 px-8'>
      <div>
        <h3 className='font-bold'>Logo</h3>
      </div>
      <ul className='flex gap-6'>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar