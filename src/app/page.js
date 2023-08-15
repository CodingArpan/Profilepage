'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href={'/settings/profile'}>
        <button className='m-5 px-5 py-2 rounded-lg bg-indigo-500 text-white'>View Profile</button>
      </Link>
    </>
  )
}
