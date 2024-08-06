import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='d-flex justify-content-between'>
        <img src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg' height='70px' width='100px'/>
        <ul className='d-flex list'>
            <li className='p-2'><Link to='/'>Home</Link></li>
            <li className='p-2'><Link to='/offers'>Offers</Link></li>
            <li className='p-2'><Link to='/help'>Help</Link></li>
            <li className='p-2'><Link to='/cart'>Cart</Link></li>

        </ul>
    </div>
  )
}

export default Header