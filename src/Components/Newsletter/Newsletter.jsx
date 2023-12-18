import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter'>
<h1>Get Exclusive on Your Email</h1>
<p>Subscribe to our Newsletter and stay updated</p>

<div>
    <input type="email" placeholder='Email' />
    <button>Subscribe</button>
</div>
    </div>
  )
}
