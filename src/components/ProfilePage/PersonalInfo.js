import React from 'react'

function PersonalInfo({Userdata}) {
  return (
    <div className='space-y-4 '>
      <div className='tagline'>
        <div className=' text-black'>Bio</div>
        <p className="desription text-sm text-gray-600">
         {Userdata.bio}
        </p>
      </div>
      <div className="contact">
        <div className="capitalize text-black" >conatct no</div>
        <p className="number text-sm text-gray-600">+91- <span>{Userdata.contact}</span></p>
      </div>
    </div>
  )
}

export default PersonalInfo