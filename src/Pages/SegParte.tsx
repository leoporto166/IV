import "./Seg.css";
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import case1 from "../img/projeto1.png"
import case1Dois from "../img/upzion2.jpeg"
import case1Tres from "../img/upzion1.jpeg"

import case2 from "../img/triad.png"
import case2Dois from "../img/triad2.png"
import case2Tres from "../img/triad1.png"
import { useEffect, useRef, useState } from "react";



export default function SegParte() {
const [luzPermitida, setLuzPermitida] = useState(false);
const secaoRef = useRef<HTMLElement | null>(null);
const swiperRef = useRef< null>(null);
const [luzTopoAtiva, setLuzTopoAtiva] = useState(false);
const [luzBottomAtiva, setLuzBottomAtiva] = useState(false);

useEffect(() => {
  if (!secaoRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const ratio = entry.intersectionRatio;

      // controle geral
      setLuzPermitida(entry.isIntersecting);

      // TOPO: aparece cedo
      setLuzTopoAtiva(ratio > 0.35);

      // BOTTOM: só quando está bem dentro
      setLuzBottomAtiva(ratio > 0.100);
    },
    {
      threshold: [0, 0.35, 0.100, 1],
    }
  );

  observer.observe(secaoRef.current);

  return () => observer.disconnect();
}, []);


useEffect(() => {
  document.body.classList.toggle("luz-topo-ativa", luzTopoAtiva);
  document.body.classList.toggle("luz-bottom-ativa", luzBottomAtiva);
}, [luzTopoAtiva, luzBottomAtiva]);


const ativarLuz = (index: number) => {
  if (!luzPermitida) return;

  document.body.className = document.body.className
    .replace(/luz-slide-\d+/g, "")
    .trim();

  document.body.classList.add(`luz-slide-${index + 1}`);
};


useEffect(() => {
  if (!luzPermitida) return;
  if (!swiperRef.current) return;

  ativarLuz(swiperRef.current.activeIndex);
}, [luzPermitida]);



useEffect(() => {
  if (!luzPermitida) {
    document.body.className = document.body.className
      .replace(/luz-slide-\d+/g, "")
      .trim();
  }
}, [luzPermitida]);

  return (
    <body>
        <div className="luz-global luz-top"></div>
        <div className="luz-global luz-bottom"></div>

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

          <section className="part2  p-2 textp1" ref={secaoRef}>
            <h1 className="akira text-lg font-semibold text-black 
                
                ">Nossas marcas e sucesso</h1>
                <div className="linhaBranco"></div>
            <div className="flex flex-col justify-center items-center">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => ativarLuz(swiper.activeIndex)}
                className="w-full mt-10 h-[500px]"


                ><style>
                    {`
        
                        .swiper-pagination-bullet {
                            background-color: #000000 !important; /* azul (Tailwind blue-500) */
                            opacity: 1;
                            }
                            .swiper-pagination-bullet-active {
                            background-color: #E0E4DF !important; /* verde (Tailwind green-500) */
                            }
                        `}
                    </style>
            
            
                          <SwiperSlide>
                              <div className="flex gap-2 mb-2 ">
            
                                <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1})` }}
                                >
                                    
                                </div>
                                                                                                       <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1Dois})` }}
                                >
                                    
                                </div>
                              </div>
                              <div
                                className="w-full aspect-[16/10] rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case1Tres})` }}
                                >
                                    
                            </div>

                            <div className="mt-5">

                                <h2 className="akira text-lg font-semibold text-black 
                                ">Upzion</h2>
                                <p>TEXXXXXTO</p>

                            </div>
                          </SwiperSlide>

                            <SwiperSlide>
                              <div className="flex gap-2 mb-2 ">
            
                                <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case2})` }}
                                >
                                    
                                </div>
                                                                                                       <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case2Dois})` }}
                                >
                                    
                                </div>
                              </div>
                              <div
                                className="w-full aspect-[16/10] rounded-4xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case2Tres})` }}
                                >
                                    
                                </div>


                                <div>
                                    <h2 className="akira text-lg font-semibold text-black 
                                    ">Triad</h2>
                                    <p>TEXXXXXTO</p>
                                </div>
                          </SwiperSlide>
            
            
            
                      </Swiper>
            </div>
          </section>
    </body>
  );
}