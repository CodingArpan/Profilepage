import React, { useEffect, useState } from 'react'

import ProfilePhoto from './Profilephoto'
import UserNameEmail from './UserNameEmail'
import Bio from './PersonalInfo'
import VisitedPlaces from './VisitedPlaces'
import ModalComp from './ModalComp'

function ProfilePageIndex() {
  const [Userdata, setUserdata] = useState({
    username: 'codingarpan',
    email: 'contact.codingarpan@gmai.com',
    bio: "Web Devloper | Looking for Internship | MERN Stack | Typescript | Nextjs | TailwindCSS | Git & Github | AWS",
    contact: '7679812045',
    password: 'ajs99ass',
    pic: ''
  })
  const [Modal, setModal] = useState(false);

  return (
    <>
      <div className="flex flex-row p-5 justify-start bg-yellow-300 drop-shadow-sm sticky top-0 z-10">
        <ProfilePhoto />
        <UserNameEmail
          Userdata={Userdata}
          Modal={Modal}
          setModal={setModal}
        />
      </div>
      {Modal ?
        <ModalComp
          Modal={Modal}
          setModal={setModal}
          Userdata={Userdata}
          setUserdata={setUserdata}
        /> : ''}
      <div className='bg-white h-[1px] w-full' ></div>
      <div className="info px-5 py-4 bg-white drop-shadow-sm">
        <Bio
          Userdata={Userdata} />
      </div>
      <VisitedPlaces />
    </>
  )
}

export default ProfilePageIndex