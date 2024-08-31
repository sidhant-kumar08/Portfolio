import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
      <div className='flex justify-center items-center'>
          <div className='w-1/2 justify-center flex gap-2'>
              <Link target='blank' to='https://github.com/sidhant-kumar08' className='hover:scale-110 transition duration-100 ease-linear'><img src="./github.svg" height={30} width={30} alt="" /></Link>
              <Link target='blank' to='https://x.com/sidhantkumar_08' className='hover:scale-110 transition duration-100 ease-linear'><img src="./twitter.svg" height={30} width={30} alt="" /></Link>
              <Link target='blank' to='https://www.linkedin.com/in/sidhant08/' className='hover:scale-110 transition duration-100 ease-linear'><img src="./linkedin.svg" height={30} width={30} alt="" /></Link>
              <Link target='blank' to='https://www.instagram.com/who.is.sidhant' className='hover:scale-110 transition duration-100 ease-linear'><img src="./instagram.svg" height={30} width={30} alt="" /></Link>
              <Link target='blank' to='https://mail.google.com/mail/u/1/#inbox?compose=jrjtXLFVCCSvrFxXdZmmwtrXbbHVRkQClrVvpSvRzxzjkWtLJjqSkKJxdwlMZcVVSbPdtJvg' className='hover:scale-110 transition duration-100 ease-linear'><img src="./gmail.svg" height={30} width={30} alt="" /></Link>
          </div>
      </div>
    </>
  )
}

export default Contact
