import React from 'react'
import Image from 'next/image'
import Image2 from '@/public/image/background.jpeg'
import Data from '@/mocks/data.json'

const index = () => {
    return (

        <div class="py-32 lg:grid-cols-12 grid-cols-1 grid gap-8 pl-1 md:pl-52">
            <section class="lg:col-span-9 gap-16">
                {Data.map((item) => (
                <div key={item.id} class="mb-3 grid lg:grid-cols-10 gap-2 relative transform">
                    <div class="lg:col-span-4 relative overflow-hidden rounded-3xl" >
                        <a href="posts/3/what-is-lorem-ipsum.html" class="block bg-cover bg-center h-[16rem] lg:h-56 group-hover:rotate-3 transition-all group-hover:scale-110" >
                            <Image src={item.image} width={500} height={500} alt="vsvsvsvs" class="w-full h-full object-cover" />
                        </a>
                    </div>
                    <div class="lg:col-span-6 p-4 pt-6 flex flex-col">
                        <a href="posts/3/what-is-lorem-ipsum.html" class="text-slate-800 font-bold text-xl">
                            {item.title}							</a>
                        <a href="posts/3/what-is-lorem-ipsum.html" class="text-slate-500 lg:my-2 mt-2 mb-10 line-clamp-2 max-w-md" />
                        <div class="flex">
                                <span class="text-slate-500">{item.description}</span>
                            </div>
                        <div class="mt-auto flex justify-end">
                            <a href={item.link  } class="py-1.5 px-3 text-xs uppercase tracking-wide font-medium bg-blue-600/10 text-blue-600 rounded-xl">
                                Basvur								</a>
                        </div>
                    </div>
                </div>
                ))}
                    </section>
                </div>

					
  )
}

export default index