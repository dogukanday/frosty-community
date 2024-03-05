import React from 'react'

const index = () => {
  return (
    <nav className='relative -mt-24 z-100 w-full bg-opacity-100'>
        <ul className='flex justify-start items-center text-black/75 p-2 md:p-4'>
            <li>
                <ul className='flex space-x-4'>
                <li>
                    <a href='#' className='text-lg'>Anasayfa</a>
                </li>
                <li>
                    <a href='#' className='text-lg'>Magaza</a>
                </li>
                <li>
                    <a href='#' className='text-lg'>Hakkimizda</a>
                </li>
                <li>
                    <a href='#' className='text-lg'>Ekip</a>
                </li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default index