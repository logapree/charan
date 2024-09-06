import React from 'react'
import mailImg from '../../assets/logo/usermail.png'
import { IoIosArrowForward } from "react-icons/io";


const AdminHome = () => {
  return (
    <>
      <section className='p-4'>
          <h1 className='text-2xl'><b>Hi, Charan!</b></h1>
          <p>Let’s help to find your dream career</p>
          <h1 className='text-xl'><b>To do list(1)</b></h1>
          <section className="grid grid-cols-6 bg-white">
            <div className=' col-span-1 grid place-content-center '>
              <img src={mailImg} alt="" className='w-6' />
            </div>
            <div className=' col-span-4 '>
              <b>Invitation to apply</b>
              <p>Persists Ventures</p>
              <b className='text-red-500'>Invitation expires in 3 days</b>
            </div>
            <div className=' col-span-1 grid place-content-center'>
              <IoIosArrowForward/>
            </div>
          </section>
      </section>
    </>
  )
}

export default AdminHome
