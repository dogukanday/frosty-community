import React from 'react'
import Image from 'next/image'
import Image2 from '@/public/image/background.jpeg'
import Data from '@/mocks/data.json'

const index = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden justify-center items-center">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
        {Data.map((item) => (
      <div key={item.id} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <Image className='rounded-xl mr-1 pr-2 w-56 md:w-[500px]' src={item.image} alt="Picture of the author" width={500} height={500} />
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.title}</h2>
          <p className="leading-relaxed">{item.description}</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Basvur
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
      </div>
      ))}
    </div>
  </div>
</section>
            )
}

            export default index