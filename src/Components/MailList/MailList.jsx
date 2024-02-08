import React from 'react'
import "./maillist.css"

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Time, Save Money!</h1>
        <p className="mailDesc">Sign up and we will send the best deals to you</p>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
