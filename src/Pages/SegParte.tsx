import "./Seg.css";
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import case1 from "../img/projeto1.png"
import case1Dois from "../img/projeto1.2.png"
import case1Tres from "../img/projeto1.3.png"

import case2 from "../img/projeto2.png"
import case2Dois from "../img/projeto2.2.png"
import case2Tres from "../img/projeto2.3.png"

export default function SegParte() {
  return (
    <body>
      <section className="hero">
        <div className="farol-wrapper">
            <img className="farol" src={farol} />
            <div className="feixe"></div>
        </div>
        
        <div className="texto flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo Marca" className=" mt-[-210px] w-60" />
          <h2 className="akira mt-[-80px] text-[15px]">Crie sua logo marca</h2>
          <p className="nelius font-semibold text-sm">Ilumine sua marca</p>

        </div>
      </section>

          <section className="hero2 bg-white rounded-2xl mt-[-100px]">
            <div className="part1 ">
              <h1 className="akira text-xl font-semibold text-black textp1 
              ">Construa uma marca que seja <p className=" font-bold animation-text ">reconhecida e lembrada</p></h1>
              <h2 className="font-semibold text textp1 description nelius">Desenvolvemos identidades visuais pensadas para posicionar sua empresa com clareza, autoridade e consistência no mercado.</h2>
              <div className="flex justify-center items-center">
                  <a className="animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 button"
                  href="https://wa.me/62982616305" target="_blank"
                  >
                      COMEÇAR MEU PROJETO
                  </a>
              </div>
            </div>

            <section className="part1 ">

                <h1 className="akira text-lg font-semibold text-black 
                 textp1
                ">Tenha uma lingugaem visual que <span className="font-bold">realmente venda.</span> </h1>
                <div className="linhaBranco textp1"></div>

                <h2 className="font-semibold text textp1 description nelius">Deixe de perder clientes por uma imagem confusa ou pouco alinhada com seu propósito. Nós da Porto vamos fazer isso para você. </h2>

                <div className="flex justify-center items-center">
                    <a className=" animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 button"
                    href="https://wa.me/62982616305" target="_blank"
                    >
                        COMEÇAR MEU PROJETO
                
                    </a>
                </div>

          </section>
        

          </section>

          <section className="part2  p-2">
            <h1 className="text-2xl font-bold text-white
            mt-6">Nossas marcas de sucesso</h1>
            <div className="linha"></div>
            <div className="flex flex-col justify-center items-center">
              <Swiper
                          pagination={{ clickable: true }}
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={20}
                          slidesPerView={1}
            
                          className="w-12/12 mt-10 h-[520px]"
                          ><style>
                          {`
            
                          .swiper-pagination-bullet {
                              background-color: #000000 !important; /* azul (Tailwind blue-500) */
                              opacity: 1;
                              }
                              .swiper-pagination-bullet-active {
                              background-color: #FFFF !important; /* verde (Tailwind green-500) */
                              }
                          `}
                      </style>
            
            
                          <SwiperSlide>
                              <div className="flex gap-2 mb-2">
            
                                  <img src={case1} className="w-50 rounded-4xl shadow-black/20 shadow-lg h-50"></img>
                                  <img src={case1Dois} className="w-50 rounded-4xl shadow-black/20 shadow-lg h-50"></img>
                              </div>
                              <img src={case1Tres} className="w-full rounded-4xl shadow-black/20 shadow-lg"></img>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div className="flex gap-2 mb-2">
            
                                  <img src={case2} className="w-50 rounded-4xl shadow-black/20 shadow-lg h-50"></img>
                                  <img src={case2Dois} className="w-50 rounded-4xl shadow-black/20 shadow-lg h-50"></img>
                              </div>
                              <img src={case2Tres} className="w-full h-68 rounded-4xl shadow-black/20 shadow-lg"></img>
                          </SwiperSlide>
            
            
            
                      </Swiper>
                      <div className="flex justify-center items-center pb-10">
                              <a className=" animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-black/10 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 button"
                              href="https://wa.me/62982616305" target="_blank"
                              >
                                  COMEÇAR MEU PROJETO
            
                              </a>
                      </div>
            </div>
          </section>
    </body>
  );
}