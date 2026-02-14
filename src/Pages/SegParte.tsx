import "./Seg.css";
import "./hero2.css"
import "./hero3.css"
import "./hero4.css"
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

import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";


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
                  <a className=" p-3 text-xl font-bold rounded-2xl mt-2 b-2  cursor-pointer button"
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
            <div className=" rounded-full bg-white linhaHero3"></div>

            
            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col"
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
                <div className="flex flex-col  w-6/12 text-white pl-4 justify-end items-end">
                <div className=''>
                  <h2 className='text-5xl font-medium nelius text-end mr-3'>Quem somos?</h2>
                  <p className='luf text-2xl mr-3 max-w-[600px] text-end '>
                    A PortoAVL é um estúdio criativo especializado em identidade visual, 
                    design estratégico e artes digitais. Nosso propósito é transformar ideias 
                    em marcas fortes, conectando estética e estratégia para gerar resultados 
                    reais.
                    Atendemos criadores de conteúdo, pequenos negócios e marcas em 
                    crescimento que buscam se destacar no mercado com uma 
                    comunicação visual única, minimalista e impactante. Nosso diferencial 
                    está na agilidade e no propósito: cada projeto é desenvolvido com 
                    atenção aos detalhes, alinhado aos objetivos de negócio e pensado para 
                    gerar conexão com o público.
                    Mais do que design, entregamos presença, força e identidade.
                    Pronto para destacar sua marca?
                  </p>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-115 sm:mt-90"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-115 sm:mt-90 items-end"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                <div className='gap-2'>
                  <h2 className='text-5xl font-medium nelius'>Criador da PORTO</h2>
                  <img src={lucas} className="rounded-xl w-90"></img>
                  <p className='luf text-xl max-w-[500px]'>A Porto nasceu da visão criativa de Lucas, que conduz cada projeto de forma próxima e
                  personalizada. Do conceito inicial à entrega final, todo o processo é pensado para traduzir
                  a essência de cada marca em uma identidade visual forte, clara e memorável.</p>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-220 sm:mt-190"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-220 sm:mt-190"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                <div className='pr-4'>
                  <h2 className='text-5xl font-medium nelius text-end mr-3'>+{contagem}</h2>
                  <h2 className='luf text-2xl text-end mr-3'>Marcas confiam em nós</h2>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-240"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-240 items-end"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col justify-start w-6/12 text-white ">
                <div className='pl-4'>
                  <h2 className='text-5xl font-medium nelius text-start mr-3'>Nosso propósito</h2>
                  <h2 className='luf text-xl text-start max-w-[600px]'>
                    Criamos identidades visuais que não apenas chamam atenção,
                    mas comunicam  valor, posicionamento e confiança. 
                    Cada marca que passa pela Porto nasce com estratégia, não com sorte.
                  </h2>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-280"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-280"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col justify-start w-6/12 text-white pr-4">
                <div className=''>
                  <h2 className='text-5xl font-medium nelius text-end mr-3'>O que nos diferencia</h2>
                  <ul className="text-end text-xl luf">
                      <li className="py-1">Design com estratégia</li>
                      <li className="py-1">Processo claro do briefing à entrega</li>
                      <li className="py-1">Marcas pensadas para crescer</li>
                  </ul>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-312"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-312 items-end"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col justify-start w-6/12 text-white ">
                <div className='pl-4'>
                  <h2 className='text-5xl font-medium nelius text-start mr-3'>Como trabalhamos</h2>
                  <h2 className='luf text-xl text-start max-w-[600px]'>
                    Tudo começa com entendimento profundo da marca. 
                    Depois, estratégia, conceito, design e refinamento.
                    Sem achismos. Sem pressa. Sem cópia.
                  </h2>
                </div>
                </div>
              </motion.div>
            </div>

            <div className="">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-359"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full glow5"></div>
              </motion.div>
              
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a items-center mt-364 justify-center"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStart(true)}
              >
                <div className="flex flex-col w-12/12 text-white justify-center items-center ">
                <div className='pl-4'>
                  <h2 className='text-6xl font-medium nelius text-start mr-3'>Vamos criar algo forte</h2>
                  <h2 className='luf text-2xl text-center font-semibold'>
                    Sua marca merece mais do que uma logo bonito.
                  </h2>
                </div>
                </div>
                <div className="mt-10">
                    <a className=" p-3 text-5xl font-bold rounded-2xl  shadow-white/15 shadow-lg cursor-pointer button "
                    href="https://wa.me/62982616305?text=Olá%20estou%20de%20interessado%20no%20serviço%20PROJETO E BRANDING" target="_blank"
                    >
                      COMEÇAR MEU PROJETO
                    </a>
                </div>
              </motion.div>
            </div>

            

        </section>


        <section className="hero4 ">

            <div className="">
              <h1 className="nelius text-4xl text-white mx-12 pt-10">Nossos Serviços</h1>
            </div>
          
          <section className="hero4-2 rounded-t-2xl flex flex-wrap justify-center items-center">

            <div className="w-full flex justify-center items-center">
              <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween = {0}
                  navigation
                  //autoplay = 5000
                  breakpoints={{
                    320: {
                      slidesPerView: 1.3,
                      spaceBetween: 33
                    },
                    640:{
                      slidesPerView: 1.5,
                      spaceBetween:20
                    },
                    641:{
                      slidesPerView: 1.7
              
                    },
                    760:{
                      slidesPerView: 2.5
                    },
                    910:{
                      slidesPerView: 2.8
                    },
                    1024:{
                      slidesPerView: 3.2,
                    },
                    1250:{
                      slidesPerView: 4,
                    },
                    1600:{
                      slidesPerView: 5.2,
                    }
                  }} className="w-full"
              >
                <SwiperSlide className="px-2">
                  <div className="serv rounded-2xl text-white">
                      <div className="flex flex-col text-start p-2">
                        <h1 className="luf text-xl font-bold mt-2">Criação de Marca</h1>
                      </div>
                      <div className="p-2">
                      <h2  className="flex gap-1 text-sm"> DE <p className="line-through text-gray-300"> R$ 700,00 </p> POR</h2>
                      <div className="text-2xl font-bold">R$ 400,00</div>
                      <div className="luf">
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck> LOGOTIPO</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  PALETA DE CORES</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  Hieraquia de Texto</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Elementos Gráficos</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Aplicações em Mockups</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Missão, Visão e Valores</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Proposta Única de Valor (PUV)</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>DNA da Marca</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Linha do Tempo e Planejamento</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Comunicação e Tom de Voz</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Arquétipo do Cliente Ideal</p>
                      </div>
                      <div className="mt-10">
                        <a className=" p-3 text-xl font-bold rounded-2xl  shadow-white/15 shadow-lg cursor-pointer button "
                        href="https://wa.me/62982616305?text=Olá%20estou%20de%20interessado%20no%20serviço%20CRIAÇÃO DA MARCA" target="_blank"
                        >
                          COMEÇAR MEU PROJETO
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="px-2 ">
                  <div className="serv rounded-2xl text-white ">
                      <div className="flex p-2 text-start items-center justify-between">
                        <h1 className="luf text-xl font-semibold mt-2">Identidade Visual</h1>
              
                        <div className="bg-green-600 w-25 h-6 text-white flex justify-center items-center font-semibold text-[14px]">Mais Vendido</div>
              
                      </div>
                      <div className="p-2">
                      <h2  className="flex gap-1 text-sm"> DE <p className="line-through text-gray-300"> R$ 1000,00 </p> POR</h2>
                      <div className="text-2xl font-bold">R$ 650,00</div>
                      <div className="luf">
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck> LOGOTIPO</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  PALETA DE CORES</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  Hieraquia de Texto</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Elementos Gráficos</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Aplicações em Mockups</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Missão, Visão e Valores</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Proposta Única de Valor (PUV)</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>DNA da Marca</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Linha do Tempo e Planejamento</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Comunicação e Tom de Voz</p>
                        <p className="flex items-center gap-1"> <FiX size={18} className="text-red-600"></FiX>Arquétipo do Cliente Ideal</p>
                      </div>
                      <div className="mt-10">
                        <a className=" p-3 text-xl font-bold rounded-2xl  shadow-white/15 shadow-lg cursor-pointer button "
                        href="https://wa.me/62982616305?text=Olá%20estou%20de%20interessado%20no%20serviço%20IDDENTIADE A MARCA" target="_blank"
                        >
                          COMEÇAR MEU PROJETO
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="px-2">
                  <div className="serv rounded-2xl text-white">
                      <div className="flex flex-col p-2 text-start">
                        <h1 className="luf text-xl font-semibold mt-2">Projeto de Branding</h1>
                      </div>
                      <div className="p-2">
                      <h2  className="flex gap-1 text-sm"> DE <p className="line-through text-gray-300"> R$ 1200,00 </p> POR</h2>
                      <div className="text-2xl font-bold">R$ 850,00</div>
                      <div className="luf">
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck> LOGOTIPO</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  PALETA DE CORES</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>  Hieraquia de Texto</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Elementos Gráficos</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Aplicações em Mockups</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Missão, Visão e Valores</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Proposta Única de Valor (PUV)</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>DNA da Marca</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Linha do Tempo e Planejamento</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Comunicação e Tom de Voz</p>
                        <p className="flex items-center gap-1"> <FiCheck size={18} className="text-green-400"></FiCheck>Arquétipo do Cliente Ideal</p>
                      </div>
                      <div className="mt-10">
                        <a className=" p-3 text-xl font-bold rounded-2xl  shadow-white/15 shadow-lg cursor-pointer button "
                        href="https://wa.me/62982616305?text=Olá%20estou%20de%20interessado%20no%20serviço%20PROJETO E BRANDING" target="_blank"
                        >
                          COMEÇAR MEU PROJETO
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
              </Swiper>
            </div>

          </section>


        </section>
    </body>
  );
}