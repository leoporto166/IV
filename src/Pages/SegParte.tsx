import "./Seg.css";
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper";

import case1 from "../img/projeto1.png"
import case1Dois from "../img/upzion2.jpeg"
import case1Tres from "../img/upzion1.jpeg"

import case2 from "../img/triad.png"
import case2Dois from "../img/triad2.png"
import case2Tres from "../img/triad1.png"

import case3 from "../img/conne3.jpeg"
import case3Dois from "../img/conne1.jpeg"
import case3Tres from "../img/conne2.jpeg"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import "./stars.css"
import lucas from "../img/Lucas.jpg"


export default function SegParte() {
const [luzPermitida, setLuzPermitida] = useState(false);
const secaoRef = useRef<HTMLElement | null>(null);
const swiperRef = useRef<SwiperType | null>(null);
const [luzTopoAtiva, setLuzTopoAtiva] = useState(false);
const [luzBottomAtiva, setLuzBottomAtiva] = useState(false);
const [contagem, setContagem]  = useState(0)
const [start, setStart] = useState(false)

useEffect(() => {
  if (!start) return

  let value = 0

  const interval = setInterval(() => {

    value += 5
    setContagem(value)

    if(value >= 100){
      clearInterval(interval)
    } 

  }, 80)

  return () => clearInterval(interval)

}, [start])

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
      setLuzBottomAtiva(ratio > 0.80);
    },
    {
      threshold: [0, 0.35, 0.80, 1],
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
          <h2 className="nelius mt-[-80px] text-[20px]">Crie sua logo marca</h2>
          <p className="luf text-sm">Ilumine sua marca</p>

        </div>
        </section>

        <section className="hero2 bg-white rounded-2xl mt-[-100px]">
            <div className="part1 ">
              <h1 className="nelius text-xl font-semibold text-black textp1 
              ">Construa uma marca <p className=" font-bold animation-text">reconhecida e lembrada</p></h1>
              <h2 className="font-semibold text textp1 description luf">Desenvolvemos identidades visuais pensadas para posicionar sua empresa com clareza, autoridade e consistência no mercado.</h2>
              <div className="flex justify-center items-center">
                  <a className="animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 button"
                  href="https://wa.me/62982616305" target="_blank"
                  >
                      COMEÇAR MEU PROJETO
                  </a>
              </div>
            </div>

            <section className="part1 ">

                <h1 className="nelius text-xl font-semibold text-black 
                 textp1
                ">Tenha uma lingugaem visual que <span className="font-bold">realmente venda.</span> </h1>
                <div className="linhaBranco textp1"></div>

                <h2 className="font-semibold text textp1 description luf">Deixe de perder clientes por uma imagem confusa ou pouco alinhada com seu propósito. Nós da Porto vamos fazer isso para você. </h2>

                <div className="flex justify-center items-center">
                    <a className=" animate-gradient p-3 text-xl font-bold rounded-2xl mt-2 b-2 shadow-white/15 shadow-lg cursor-pointer hover:mt-[-4px] hover:mb-[5px] transition-all duration-500 button"
                    href="https://wa.me/62982616305" target="_blank"
                    >
                        COMEÇAR MEU PROJETO
                
                    </a>
                </div>

          </section>
        

        </section>

        <section className="part2  p-2 " ref={secaoRef}>
            <h1 className="nelius text-xl font-semibold text-black 
                
                textp1">Nossas marcas de sucesso</h1>
                <div className="textp1 linhaBranco"></div>
            <div className="flex flex-col justify-center items-center textp1">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => ativarLuz(swiper.activeIndex)}
                className=" w-full mt-10 h-[500px]"


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

                                <h2 className="nelius text-lg font-semibold text-black 
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
                                    <h2 className="nelius text-lg font-semibold text-black 
                                    ">Triad</h2>
                                    <p className="luf text">TEXXXXXTO</p>
                                </div>
                          </SwiperSlide>


                                                    
                            <SwiperSlide>
                              <div className="flex gap-2 mb-2 ">
            
                                <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3})` }}
                                >
                                    
                                </div>
                                                                                                       <div
                                className="w-50 h-35 rounded-xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3Dois})` }}
                                >
                                    
                                </div>
                              </div>
                              <div
                                className="w-full aspect-[16/10] rounded-4xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case3Tres})` }}
                                >
                                    
                                </div>


                                <div>
                                    <h2 className="nelius text-lg font-semibold text-black 
                                    ">Conexax</h2>
                                    <p className="luf text">TEXXXXXTO</p>
                                </div>
                          </SwiperSlide>
            
            
            
                      </Swiper>
            </div>
        </section>

        <section className="hero3 flex justify-center relative mt-10 ceu"

        >

        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>


            {/* Linha */}
            <div className=" rounded-full bg-white linha"></div>

            
            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center "
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-end w-6/12 text-white px-2">
                <div className='gap-2'>
                  <h2 className='text-5xl font-medium nelius'>Quem somos?</h2>
                  <p className='luf text-xl'>A Porto é um marca de identidade visual... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident quo delectus voluptas laboriosam recusandae eos neque labore porro ab. Voluptate perspiciatis commodi unde temporibus odit ducimus voluptatem debitis quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga quibusdam nemo voluptatibus ex eaque cum facilis ducimus ad fugit aspernatur mollitia dignissimos, officia voluptates eius delectus? Tenetur, inventore minima?</p>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="b">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center b"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a b  items-end"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                <div className='gap-2'>
                  <h2 className='text-5xl font-medium nelius'>CEO</h2>
                  <img src={lucas} className="rounded-xl"></img>
                  <p className='luf text-xl'>Nosso CEO... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident quo delectus voluptas laboriosam recusandae eos neque labore porro ab. Voluptate perspiciatis commodi unde temporibus odit ducimus voluptatem debitis quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga quibusdam nemo voluptatibus ex eaque cum facilis ducimus ad fugit aspernatur mollitia dignissimos, officia voluptates eius delectus? Tenetur, inventore minima?</p>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center ba"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a ba"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                <div className='gap-2'>
                  <h2 className='text-5xl font-medium nelius text-end mr-3'>+{contagem}</h2>
                  <h2 className='luf text-2xl text-end mr-3'>Marcas confiam em nós</h2>
                </div>
                </div>
              </motion.div>
            </div>


        </section>
    </body>
  );
}