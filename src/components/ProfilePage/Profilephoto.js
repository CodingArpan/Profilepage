'use client'
import React from "react";

function ProfilePhoto() {
  return <>
  <div className="pic relative rounded-full drop-shadow-xl ">
    <div className="circle absolute -top-1 -left-2 w-14 h-14 rounded-full bg-transparent border border-teal-400"></div>
    <div className="roundphoto w-14 h-14 rounded-full bg-black flex justify-center items-center overflow-hidden">
      <img className="w-14 h-14 rounded-full" src="/mypic.jpg" alt="my profile pic" />
    </div>

  </div>
  </>;
}

export default ProfilePhoto;
