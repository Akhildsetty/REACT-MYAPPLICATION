import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imges/react-icon.jpg'
import { context } from '../App.js'

const Header = () => {
  return (

    <div className='element'>
      <ul>
        <center>
          <img src={Logo} alt="React-Logo" height="100px" width="auto" /><br />
         <context.Consumer>
           {data=><div>{data}</div>}
         </context.Consumer>
        </center>
        <span>
          <Link to={"/login"}><li>Login</li></Link>
          <Link to={"/signup"}><li>Signup</li></Link>
        </span>
      </ul>
    </div>
  )
}

export default Header
