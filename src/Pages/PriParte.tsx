import case1 from "../img/projeto1.png"
import case1Dois from "../img/projeto1.2.png"
import case1Tres from "../img/projeto1.3.png"

import case2 from "../img/projeto2.png"
import case2Dois from "../img/projeto2.2.png"
import case2Tres from "../img/projeto2.3.png"


import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import './Pri.css'

export default function PriParte(){

return(

    <body className="flex flex-col justify-center items-center">

    <div className=" mt-10 p-5 flex flex-col justify-center
    items-center ">
        <div className="tudo">
            <section className="hero">
                <div className="sliders-bg gap-2">
                    <div className="slider-row">
                        <div className="slider gap-2">
                            <img src={case1} />
                            <img src={case1Dois} />
                            <img src={case1Tres} />
                            <img src={case1} />
                        </div>
                    </div>

        <div className="slider-row">
            <div className="slider reverse gap-2">
                <img src={case2} />
                <img src={case2Dois} />
                <img src={case2Tres} />
                <img src={case2} />
            </div>
        </div>
  </div>

  <div className="a"></div>

  <div className="content mt-30">
                        <h1 className="text-2xl font-medium
                        ">Construa uma marca que seja <p className="bg-white text-black w-68 font-bold">reconhecida e lembrada</p></h1>
                        <h2 className="my-3 text-lg font-normal ">Desenvolvemos identidades visuais pensadas para posicionar sua empresa com clareza, autoridade e consistência no mercado.</h2>
                        <div className="flex justify-center items-center">
                            <a className="bg-linear-to-r from-green-800 via-green-600 to-green-400 animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 "
                            href="https://wa.me/62982616305" target="_blank"
                            >
                                COMEÇAR MEU PROJETO
                
                            </a>
                        </div>
                    </div>
</section>
 
            </div>

            <section className="mt-10">

                <h1 className="text-2xl font-medium 
                ">Tenha uma comunicação visual que <span className="font-bold">realmente converta.</span> </h1>
                <div className="linha"></div>

                <h2 className="my-3 text-lg font-normal ">Deixe de perder clientes por uma imagem confusa ou pouco alinhada com seu propósito. Nós da Porto Agencia vamos fazer isso para você. </h2>

                <div className="flex justify-center items-center">
                    <a className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500"
                    href="https://wa.me/62982616305" target="_blank"
                    >
                        COMEÇAR MEU PROJETO
                
                    </a>
                </div>

            </section>
            
        </div>

            <div className="bg-white text-black px-5 rounded-t-3xl ">
                <section className="mt-20">
                    <h2 className="text-xl font-medium pt-5">Transformação de marca</h2>
                    <div className="linhaBranco"></div>

                    <Swiper 
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        
                        className="w-[400px] mt-10 h-[500px]"
                        ><style>
                        {`
            
                        .swiper-pagination-bullet {
                            background-color: #000F0F !important; /* azul (Tailwind blue-500) */
                            opacity: 1;
                            }
                            .swiper-pagination-bullet-active {
                            background-color: #202424 !important; /* verde (Tailwind green-500) */
                            }
                        `}
                    </style>
                    
                     
                        <SwiperSlide> 
                            <div className="flex gap-2 mb-2"> 
                                
                                <img src={case1} className="w-40 rounded-4xl shadow-black/20 shadow-lg h-45"></img> 
                                <img src={case1Dois} className="w-40 rounded-4xl shadow-black/20 shadow-lg h-45"></img> 
                            </div> 

                            <img src={case1Tres} className="w-full rounded-4xl shadow-black/20 shadow-lg"></img> 
                        </SwiperSlide> 

                        <SwiperSlide>
                            <div className="flex gap-2 mb-2"> 
                                
                                <img src={case2} className="w-40 rounded-4xl shadow-black/20 shadow-lg h-45"></img> 
                                <img src={case2Dois} className="w-40 rounded-4xl shadow-black/20 shadow-lg h-45"></img> 
                            </div> 

                            <img src={case2Tres} className="w-full h-65 rounded-4xl shadow-black/20 shadow-lg"></img> 
                        </SwiperSlide>
                        
                        
                            
                    </Swiper>

                    <div className="flex justify-center items-center pb-10">
                            <a className="bg-linear-to-r from-green-600 via-green-400 to-green-300 animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-black/10 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 "
                            href="https://wa.me/62982616305" target="_blank"
                            >
                                COMEÇAR MEU PROJETO
                
                            </a>
                        </div>
                </section>
            </div>
        

    </body>

)

}