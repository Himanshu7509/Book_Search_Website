import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchFrom from '../../components/SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>

      <header className="header">

        <Navbar />

        <div className='header-content flex flex-c text-center text-white'>

          <h2 className='header-title'>
            find your book of choice.
          </h2>

          <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus est a modi. Laboriosam ipsam dolores, ea, quis deserunt possimus tenetur aperiam laborum perspiciatis quae nemo impedit expedita, doloremque minus.
          </p>

          <SearchFrom/>

        </div>

      </header>
      
    </div>
  )
}

export default Header
