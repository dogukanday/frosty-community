import React from 'react'
import { useState } from 'react'

const Index = () => {

    const [games, setGames] = useState('Rust')
    const [desc, setDesc] = useState('Rust ile oyun keyfiii simdi sunucularimizda oynayin, Frosty Community sunuculari ile eglencenin tadini cikarin')
    const [link, setLink] = useState('https://play.leaderos.com')


    const Rust = () => {
        setGames('Rust')
        setDesc('Rust ile oyun keyfiii simdi sunucularimizda oynayin, Frosty Community sunuculari ile eglencenin tadini cikarin!')
        setLink('https://play.leaderos.com')
    }

    const Minecraft = () => {
        setGames('Minecraft')
        setDesc('Mine ile oyun keyfiii simdi sunucularimizda oynayin, Frosty Community sunuculari ile eglencenin tadini cikarin!')
        setLink('https://play.leaderos.com')
    }

    const Gta = () => {
        setGames('Gta')
        setDesc('Mine ile oyun keyfiii simdi sunucularimizda oynayin, Frosty Community sunuculari ile eglencenin tadini cikarin!')
        setLink('https://play.leaderos.com')
    }
  return (
    <div>
        <div className="relative my-36">
            <div className='flex justify-center items-center my-5'>
                <button onClick={Rust} className="bg-emerald hover:bg-emerald-700 text-black font-bold py-2 px-4 rounded">Rust</button>
                <button onClick={Minecraft} className="bg-emerald hover:bg-emerald-700 text-black font-bold py-2 px-4 rounded">Minecraft</button>
                <button onClick={Gta} className="bg-emerald hover:bg-emerald-700 text-black font-bold py-2 px-4 rounded">GTa</button>
            </div>
					<div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-6">
						<div className="rounded-3xl lg:rounded-4xl overflow-hidden relative h-[28rem] lg:h-[36rem] bg-emerald-900/25 grid">
							<div className="carousel col-start-1 row-start-1 h-full" x-ref="carousel">
																	<div className="w-full h-full px-4 bg-cover bg-center">
										<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900/80 to-blue-900/60"></div>
										<div className="relative p-6 py-12 lg:p-20 h-full">
											<div className="lg:max-w-lg xl:max-w-2xl">
												<div className="font-bold text-white text-4xl">
													<span>
                                                        {games}
                                                    </span>
                                                    </div>
												<p className="text-white/80 text-lg font-medium mt-4 line-clamp-2 lg:line-clamp-none">
													{desc}												</p>
											</div>
											<div className="mt-8">
												<a href={link} className="rounded-2xl w-fit center gap-2 transition-all hover:gap-4 py-3 px-6 font-semibold bg-blue-500/70 text-emerald-100 relative group overflow-hidden">
													
													<span className="relative tracking-wide">
														Simdi Oyna													</span>
													<i className="fas fa-arrow-right relative"></i>
												</a>
											</div>
										</div>
									</div>
															</div>
						</div>
					</div>
                    </div>
    </div>
  )
}

export default Index