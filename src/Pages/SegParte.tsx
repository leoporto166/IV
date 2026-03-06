import "./Seg.css";
import "./hero2.css"
import "./hero3.css"
import "./hero4.css"
import "./hero5.css"

import "./SegPc.css"
import "./hero2Pc.css"
import "./hero3Pc.css"
import "./hero4Pc.css"
import "./hero5Pc.css"
import "./footerPc.css"
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperClass } from "swiper";

import case1 from "../img/acao3.png"
import case1Dois from "../img/acao2.png"
import case1Tres from "../img/acao1.png"
import logo1 from "../img/acaoLogo.png"

import case2 from "../img/chico3.png"
import case2Dois from "../img/chico1.png"
import case2Tres from "../img/chico2.png"
import logo2 from "../img/chicoLogo.png"

import case3 from "../img/conne3.jpeg"
import case3Dois from "../img/conne2.jpeg"
import case3Tres from "../img/conne1.jpeg"
import logo3 from "../img/conexasLogo.png"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import "./stars.css"
import lucas from "../img/Lucas.jpg"
import Leo from "../img/Leo.jpeg"
import sla from "../img/sla.jpeg"
import mt from "../img/mt.jpeg"
import mth from "../img/Mth.jpeg"
import mp from "../img/mp.jpeg"
import video from "../img/Composição 3.mp4"


import { Menu } from "../components/menu";

import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"

import { FaInstagram } from "react-icons/fa";
import logo from "../img/LogoPorto1.png"

import { FaWhatsapp } from "react-icons/fa";




export default function SegParte() {
const secaoRef = useRef<HTMLElement | null>(null);
const swiperRefs = useRef<(SwiperClass | null)[]>([]);
const [contagem, setContagem]  = useState(0)
const [start, setStart] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

useEffect(() => {
  if (!start) return

  let value = 0

  const interval = setInterval(() => {

    value += 5
    setContagem(value)

    if(value >= 50){
      clearInterval(interval)
    } 

  }, 80)

  return () => clearInterval(interval)

}, [start])





  return (
    <body>
        <div className="luz-global luz-top"></div>
        <div className="luz-global luz-bottom"></div>

        <Menu></Menu>

        {isDesktop ? (

           <div>
            <section className="hero">
                <div className="farol-wrapper">
                    <img className="farol" src={farol} />
                    <div className="feixe"></div>
                </div>
        
                <div className="texto flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo Marca" className=" mt-[-210px] w-60" />
                  <h2 className="neliusR mt-[-80px] text-[20px]">Design estratégico  para marcas<h2 className="nelius text-[20px]">que querem crescer.</h2></h2>

                  <p className="luf text-sm">Criamos identidades visuais preparadas <br /> para escalar e se <span className="luf font-extrabold">tornar referência.</span></p>

                </div>
            </section>

            <section className="hero2  bg-white rounded-2xl mt-[-150px]">
                <div className="part1 ">
                  <h1 className="nelius text-xl font-semibold text-black textp1">
                    Construa uma marca{" "}
                    <span className="font-bold animation-text animation">
                      reconhecida e lembrada
                    </span>
                  </h1>

                  <h2 className=" text textp1 description luf">Criamos identidades visuais estratégicas que posicionam sua empresa com <p className="font-bold">autoridade, diferenciação e visão de crescimento.</p></h2>
                  <div className="flex justify-center items-center">
                      <a className=" p-3 text-sm font-bold rounded-2xl mt-2 b-2  cursor-pointer button luf w-60 text-center flex justify-center items-center gap-3"
                      href="https://wa.me/62982612708" target="_blank"
                      >
                        <FaWhatsapp size={20}></FaWhatsapp>
                          Começar meu projeto 
                      </a>
                  </div>
                </div>

                <section className="part1 ">

                  <h1 className="nelius text-xl font-semibold text-black 
                  textp1
                  ">Sua imagem precisa trabalhar por você.</h1>
                  <div className="linhaBranco textp1"></div>

                  <h2 className=" text textp1 description luf">
                    Uma identidade visual bem construída comunica valor antes mesmo da primeira conversa.
                    Nós estruturamos sua marca para transmitir confiança, autoridade e profissionalismo em cada ponto de contato. 
                  </h2>

                  <div className="flex justify-center items-center">
                      <a className=" p-3 text-sm font-bold rounded-2xl mt-2 b-2  cursor-pointer button luf w-60 text-center flex justify-center items-center gap-3"
                      href="https://wa.me/62982612708" target="_blank"
                      >
                        <FaWhatsapp size={20}></FaWhatsapp>
                          Começar meu projeto 
                      </a>
                  </div>

                </section>
        

            </section>

            <section className=" bg-white p-2" ref={secaoRef}
              id="marcas"
              >
              <div className="flex flex-col justify-center items-center">
              <div>

                <img src={logo1} className="w-50"></img>

              </div>
              <Swiper
                            
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[0] = swiper;
                }}
                className=" w-full mt-10 h-[500px] mb-[30px] mt-[-42px]"


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
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1Dois})` }}
                                >
                                    
                            </div>


                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1})` }}
                                >
                                    
                            </div>
                          </SwiperSlide>
            
              </Swiper>

              <div>

                  <img src={logo2} className="w-50"></img>

              </div>
              <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[1] = swiper;
                }}
                className=" w-full mt-10 h-[500px] mb-[30px] mt-[-32px]"


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
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case2Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case2Dois})` }}
                                >
                                    
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case2})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>
            
              </Swiper>

              <div>
                <img src={logo3} className="w-50"></img>  
              </div>

              <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[2] = swiper;
                }}
                className=" w-full mt-10 h-[500px] mb-[30px] mt-[-25px]"


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
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3Dois})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>
            
              </Swiper>
              </div>

            <div className=" marcas">
            <h1 className="luf text-md">Nossos clientes...</h1>
                <div className="w-full flex justify-center items-center flex-col">
                   <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                  ></video>
                </div>
            </div>

            </section>

            <section className="hero3 flex justify-center relative mt-10 ceu "
            id="porto"

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
                        A PortoAVL é um estúdio criativo especializado em identidade visual e posicionamento de marca.

                        Desenvolvemos marcas com direção estratégica, consistência visual e visão de longo prazo.

                        Cada projeto começa com entendimento profundo do negócio e termina com uma identidade estruturada para sustentar crescimento, autoridade e relevância no mercado.

                      </p>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-80 sm:mt-90"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-80 sm:mt-90 items-end"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                    <div className='gap-2'>
                      <h2 className='text-5xl font-medium nelius'>Criador da PORTO</h2>
                      <img src={lucas} className="rounded-xl w-90"></img>
                      <p className='luf text-xl max-w-[500px]'>Sou Lucas Porto, designer especializado em identidade visual e posicionamento de marca.

                    Trabalho ajudando empresas a organizarem sua comunicação, fortalecerem sua presença no mercado e construírem marcas com mais clareza e consistência.

                    Acredito que design precisa ter intenção.
                    Cada decisão visual deve sustentar crescimento, percepção de valor e profissionalismo.</p>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-200 sm:mt-190"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-200 sm:mt-190"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStart(true)}
                  >
                    <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                    <div className='pr-4'>
                      <h2 className='text-5xl font-medium nelius text-end mr-3'>+{contagem} Projetos desenvolvidos</h2>
                      <h2 className='luf text-2xl text-end mr-3'>Identidades criadas com estratégia e direção clara.</h2>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-230"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-230 items-end"
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
                        Cada marca que passa pela Porto Avl nasce com estratégia, não com sorte.
                      </h2>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-275"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-275"
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
                          <p>
                            Acompanhamos cada cliente de forma próxima, do início ao refinamento final.

                            Cada detalhe é discutido, ajustado e alinhado com os objetivos do negócio.
                            Não entregamos apenas arquivos. Entregamos direção, clareza e segurança nas decisões.
                          </p>
                      </ul>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-323"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-323 items-end"
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
                        <p className="font-bold mt-2">1. Diagnóstico e alinhamento</p> 
                        Entendemos o negócio, o público e o momento da marca.<br /><br />

                        <p className="font-bold">2. Estratégia e direção criativa</p>
                        Definimos posicionamento, conceito e base visual.<br /><br />

                        <p className="font-bold">3. Desenvolvimento e refinamento</p>
                        Construímos a identidade com consistência e atenção aos detalhes.<br /><br />

                        <p className="font-bold">4. Entrega estruturada</p>
                        Sistema visual organizado e pronto para aplicação.
                      </h2>
                    </div>
                    </div>
                  </motion.div>
                </div>

                <div className="">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-410"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a items-center mt-420 justify-center"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStart(true)}
                  >
                    <div className="flex flex-col w-12/12 text-white justify-center items-center ">
                    <div className='pl-4'>
                      <h2 className='text-6xl font-medium nelius text-start mr-3'>Vamos criar uma marca com estrategia</h2>
                      <h2 className='luf text-2xl text-center font-semibold'>
                        Sua marca merece mais do que uma logo bonito.
                      </h2>
                    </div>
                    </div>
                    <div className="mt-10 button cursor-pointer">
                          <a className=" text-3xl font-bold rounded-2xl cursor-pointer luf px-20 flex justify-center items-center gap-5 "
                          href="https://wa.me/62982612708?text=Olá%20estou%20de%20interessado%20no%20serviço%20PROJETO E BRANDING" target="_blank"
                          >
                            <FaWhatsapp size={40}className="cursor-pointer"></FaWhatsapp>
                            COMEÇAR MEU PROJETO 
                          </a>
                      </div>
                  </motion.div>
                </div>           

            </section>

            <section className="hero5 flex justify-center items-center p-4"
            id="avaliações">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween = {20}
                navigation
                //autoplay = 5000
                className=" h-[400px] w-full"
                breakpoints={{
                  320: {
                    slidesPerView: 1.3,
                    spaceBetween: 20
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
                }}
              >

                <SwiperSlide className="">

                  <div className="slide rounded-xl p-2 mt-5" >
                    <img src={mt} className="img"></img>
                    <div className="w-full">

                      <p className="w-[250px] h-[170px]  text-sm mt-2">"O atendimento foi excelente do início ao fim. A Porto Identidade Visual entendeu exatamente o que eu precisava e traduziu isso em um projeto profissional, criativo e bem alinhado com a proposta da minha marca. Comunicação clara, prazos respeitados e um resultado acima do esperado."</p>

                      <h1 className="luf font-bold">Matheus Borges</h1>

                    </div>

                    
                  </div>

                </SwiperSlide>

                <SwiperSlide>

                  <div className="slide rounded-xl p-2 mt-5">
                    <img src={sla} className="img"></img>
        
                      <p className="w-[250px] h-[170px]  text-sm mt-2">"Desde o primeiro contato, o processo foi muito organizado e transparente. O cuidado com os detalhes e a preocupação em entregar algo que realmente representasse a empresa fizeram toda a diferença. O resultado final ficou moderno, funcional e muito bem pensado.!"</p>

                      <h1 className="luf font-bold">Yuri Miranda</h1>

                  </div>

                </SwiperSlide>

                <SwiperSlide>

                  <div className="slide rounded-xl p-2 mt-5">
                    <img src={Leo} className="img"></img>
                    
                      <p className="w-[260px] h-[170px]  text-sm mt-2">"A experiência foi extremamente positiva. O atendimento é próximo, atencioso e passa muita segurança durante todo o desenvolvimento do projeto. O trabalho entregue superou as expectativas, mostrando profissionalismo, criatividade e um domínio muito forte de identidade visual."</p>

                      <h1 className="luf font-bold">Leonardo</h1>

                  </div>

                </SwiperSlide>
                
              </Swiper>

                    
            </section>

            <section className="hero4 mt-[-5px] " id="soluções">

                <div className="w-full ml-18 mt-4">
                  <h1 className="nelius text-4xl text-black">Nossas Soluções</h1>
                </div>
              
              <section className="hero4-2 rounded-t-2xl flex justify-center items-center bg-black lg:items-start">

                <div className=" flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-start">

                    <div className="p-4 flex flex-col justify-center items-center">
                      <img src={card1} alt="card um" className="w-100"/>

                      <a
                        className="button nelius mt-2 flex justify-center items-center
                        gap-3"
                        href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20na%20cria%C3%A7%C3%A3o%20da%20marca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={20}></FaWhatsapp>
                        Quero uma criação da marca 
                      </a>
                    </div>

                    <div className="p-4 flex flex-col justify-center items-center">
                      <img src={card2} alt="card dois" className="w-100"/>

                      <a
                        className="button nelius mt-2 flex justify-center items-center gap-3"
                        href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20na%20identidade%20visual"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={20}></FaWhatsapp>
                        Quero uma identidade visual 
                      </a>
                    </div>

                    <div className="p-4 flex flex-col justify-center items-center">
                      <img src={card3} alt="card tres" className="w-100"/>

                      <a
                        className="button nelius mt-2 flex justify-centeri items-center gap-3"
                        href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20no%20projeto%20de%20branding"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={20}></FaWhatsapp>
                        Quero um projeto de branding  
                      </a>
                    </div>

                  
                </div>



              </section>


            </section>

            <div className="linhaFooter"></div>

              <footer className='relative bg-black'>
                        <div className='w-full flex justify-center items-center'>
        
                            <img src={logo} alt="Escudo Goias" className='absolute w-[150px] z-30 mt-[-40px]'></img>
        
                        </div>
                    <div className='w-full flex justify-center items-center mt-20 '>
                            <div className='w-11/12 text-white flex flex-col justify-center items-center mt-4'>
                                <h1 className='text-xl font-bold luf'>REDES SOCIAIS</h1>
                                <div className='flex justify-center items-center  mt-2 mb-10 '>
                                    <a href="https://www.instagram.com/portoavl/" target="_blank">
                                      <FaInstagram className="text-violet-300 cursor-pointer hover:text-white transition-all duration-600" size={40}></FaInstagram>
                                    </a>
                                </div>
                            </div>

                          
                        </div>

                        <div className="text-white px-2 luf text-[12px] mt-10">
                              Email: <span  className="
                              ">Portoavlagencia@gmail.com</span>
                        </div>

                      

                        <div className="text-gray-500 px-2 luf text-[12px] py-2">
                              <p className="text-white">Site desenvolvido por <a href="https://leoporto166.github.io/Portifolio_Online/" target="_blank">Leonardo Porto</a></p>
                        </div>


                        <div className="text-gray-500 px-2 luf text-[12px] mt-10 py-2">
                              2026 © PortoAvl <br />
                              CNPJ: 65.357.601/0001-00
                        </div>
                        
              </footer>

            
          </div>

        ) : (
            <div>
              <section className="heropc">
                <div className="farol-wrapper">
                    <img className="farolpc" src={farol} />
                    <div className="feixepc"></div>
                </div>
        
                <div className="texto flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo Marca" className=" mt-[-210px] w-60" />
                  <h2 className="neliusR mt-[-80px] text-[25px]">Design estratégico  para marcas <h2 className="nelius text-[25px]">que querem crescer.</h2></h2>

                  <p className="luf text-md mt-1">Criamos identidades visuais preparadas <br /> para escalar e se <span className="luf font-extrabold">tornar referência.</span></p>

                </div>
              </section>

              <section className="hero2pc  rounded-2xl mt-[-150px] flex bg-white">
                <div className="flex">
                  <div className="part1pc mr-10">
                    <h1 className="nelius text-2xl font-semibold text-black textp1pc">
                      Construa uma marca{" "}
                      <span className="font-bold animation-textpc animationpc">
                        reconhecida e lembrada
                      </span>
                    </h1>
                    <div className="linhaBranco textp1pc"></div>
                    <h2 className=" textpc textp1pc description luf">Criamos identidades visuais estratégicas que posicionam sua empresa com <p className="font-bold">autoridade, diferenciação e visão de crescimento.</p></h2>
                  </div>
                  <section className="part1pc ">
                    <h1 className="nelius text-2xl font-semibold text-black
                    textp1pc
                    ">Sua imagem precisa trabalhar por você.</h1>
                    <div className="linhaBranco textp1"></div>
                    <h2 className=" textpc textp1pc description luf">
                      Uma identidade visual bem construída comunica valor antes mesmo da primeira conversa.
                      Nós estruturamos sua marca para transmitir confiança, autoridade e profissionalismo em cada ponto de contato.
                    </h2>
                  </section>
                </div>

                              <section className="buttonpc">
                  <div className="flex justify-center items-center">
                      <a className=" p-3 text-md font-bold rounded-2xl b-2 cursor-pointer button luf text-center mt-10 w-100 flex justify-center items-center gap-3"
                      href="https://wa.me/62982612708" target="_blank"
                      >
                        <FaWhatsapp size={30}></FaWhatsapp>
                          Começar meu projeto <FaWhatsapp size={20}></FaWhatsapp>
                      </a>
                  </div>  
              </section>

              </section>


              <section className="part2 bg-white p-2 mb-50" ref={secaoRef}
              id="marcas"
              >
              <div className="flex flex-col justify-center items-center">


              <section className="flex w-full h-[700px] justify-between mt-10 bg-gray-200/60 rounded-2xl">

                <div className="flex items-center pl-10 w-4/12">
                  <img src={logo1} className="w-50"></img>
                </div>

              
              <Swiper
                modules={[Navigation, Autoplay]}
                pagination={false}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[1] = swiper;
                }}
                className=" w-10/12 h-[840px] mb-[30px]"


                >
                    
            
                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case1Dois})` }}
                                >
                                    
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case1})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>
            
              </Swiper>

              </section>

               <section className="flex w-full h-[700px] justify-between mt-10 bg-gray-200/60  rounded-2xl">

                <div className="flex items-center pl-10 w-4/12">
                  <img src={logo2} className="w-50"></img>
                </div>

              
              <Swiper
                modules={[Navigation, Autoplay]}
                pagination={false}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[1] = swiper;
                }}
                className=" w-10/12 h-[840px] mb-[30px]"


                >
                    
            
                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case2Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case2Dois})` }}
                                >
                                    
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-left bg-cover"
                                style={{ backgroundImage: `url(${case2})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>
            
              </Swiper>

              </section>

               <section className="flex w-full h-[700px] justify-between mt-10 bg-gray-200/60  rounded-2xl">

                <div className="flex items-center pl-10 w-4/12">
                  <img src={logo3} className="w-50"></img>
                </div>

              
              <Swiper
                modules={[Navigation, Autoplay]}
                pagination={false}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRefs.current[1] = swiper;
                }}
                className=" w-10/12 h-[840px] mb-[30px]"


                >
                    
            
                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3Tres})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3Dois})` }}
                                >
                                    
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                              <div
                                className="w-full h-10/12 rounded-2xl shadow-black/20 shadow-lg bg-center bg-cover"
                                style={{ backgroundImage: `url(${case3})` }}
                                >
                                    
                            </div>

                          </SwiperSlide>
            
              </Swiper>

              </section>
              </div>

            <div className="mt-2 marcas">
            <h1 className="luf text-3xl">Nosso clientes...</h1>
                <div className="flex justify-center items-center flex-col">
                   <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto max-h-screen object-cover "
                    ></video>
                </div>
            </div>

              </section>

              <section className="hero3pc flex justify-center relative mt-10 ceu"
              id="porto"

              >

              <div className="starspc stars-1pc"></div>
              <div className="starspc stars-2pc"></div>
              <div className="starspc stars-3pc"></div>


                  {/* Linha */}
                  <div className=" rounded-full bg-white linhaHero3pc"></div>

                  
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
                        <h2 className='text-6xl font-medium nelius text-end mr-3'>Quem somos?</h2>
                        <p className='luf text-3xl mr-3 max-w-[600px] text-end '>
                          A PortoAVL é um estúdio criativo especializado em identidade visual e posicionamento de marca.

                          Desenvolvemos marcas com direção estratégica, consistência visual e visão de longo prazo.

                          Cada projeto começa com entendimento profundo do negócio e termina com uma identidade estruturada para sustentar crescimento, autoridade e relevância no mercado.

                        </p>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-60"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-60 items-end"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                      <div className='gap-2'>
                        <h2 className='text-6xl font-medium nelius'>Criador da PORTO</h2>
                        <img src={lucas} className="rounded-xl w-90"></img>
                        <p className='luf text-3xl max-w-[500px]'>Sou Lucas Porto, designer especializado em identidade visual e posicionamento de marca.

                      Trabalho ajudando empresas a organizarem sua comunicação, fortalecerem sua presença no mercado e construírem marcas com mais clareza e consistência.

                      Acredito que design precisa ter intenção.
                      Cada decisão visual deve sustentar crescimento, percepção de valor e profissionalismo.</p>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-190"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-190"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => setStart(true)}
                    >
                      <div className="flex flex-col justify-start w-6/12 text-white pl-4">
                      <div className='pr-4'>
                        <h2 className='text-6xl font-medium nelius text-end mr-3'>+{contagem} Projetos desenvolvidos</h2>
                        <h2 className='luf text-3xl text-end mr-3'>Identidades criadas com estratégia e direção clara.</h2>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-210"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-210 items-end"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => setStart(true)}
                    >
                      <div className="flex flex-col justify-start w-6/12 text-white ">
                      <div className='pl-4'>
                        <h2 className='text-6xl font-medium nelius text-start mr-3'>Nosso propósito</h2>
                        <h2 className='luf text-3xl text-start max-w-[600px]'>
                          Criamos identidades visuais que não apenas chamam atenção,
                          mas comunicam  valor, posicionamento e confiança. 
                          Cada marca que passa pela Porto Avl nasce com estratégia, não com sorte.
                        </h2>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-255"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-255"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => setStart(true)}
                    >
                      <div className="flex flex-col justify-start w-6/12 text-white pr-4">
                      <div className=''>
                        <h2 className='text-6xl font-medium nelius text-end mr-3'>O que nos diferencia</h2>
                        <ul className="text-end text-3xl luf">
                            <p>
                              Acompanhamos cada cliente de forma próxima, do início ao refinamento final.

                              Cada detalhe é discutido, ajustado e alinhado com os objetivos do negócio.
                              Não entregamos apenas arquivos. Entregamos direção, clareza e segurança nas decisões.
                            </p>
                        </ul>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-300"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a mt-300 items-end"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => setStart(true)}
                    >
                      <div className="flex flex-col justify-start w-6/12 text-white ">
                      <div className='pl-4'>
                        <h2 className='text-6xl font-medium nelius text-start mr-3'>Como trabalhamos</h2>
                        <h2 className='luf text-3xl text-start max-w-[600px]'>
                          <p className="font-bold mt-2">1. Diagnóstico e alinhamento</p> 
                          Entendemos o negócio, o público e o momento da marca.<br /><br />

                          <p className="font-bold">2. Estratégia e direção criativa</p>
                          Definimos posicionamento, conceito e base visual.<br /><br />

                          <p className="font-bold">3. Desenvolvimento e refinamento</p>
                          Construímos a identidade com consistência e atenção aos detalhes.<br /><br />

                          <p className="font-bold">4. Entrega estruturada</p>
                          Sistema visual organizado e pronto para aplicação.
                        </h2>
                      </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center mt-385"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full glow5"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col a items-center mt-400 justify-center"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 0.5 }}
                      transition={{ duration: 2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => setStart(true)}
                    >
                      <div className="flex flex-col w-12/12 text-white justify-center items-center ">
                      <div className='pl-4'>
                        <h2 className='text-8xl font-medium nelius text-start mr-3'>vamos criar uma marca com estrategia</h2>
                        <h2 className='luf text-4xl text-center font-semibold'>
                          Sua marca merece mais do que uma logo bonito.
                        </h2>
                      </div>
                      </div>
                      <div className="mt-10 button cursor-pointer">
                          <a className=" text-5xl font-bold rounded-2xl cursor-pointer luf px-20 flex justify-center items-center gap-5 "
                          href="https://wa.me/62982612708?text=Olá%20estou%20de%20interessado%20no%20serviço%20PROJETO E BRANDING" target="_blank"
                          >
                            <FaWhatsapp size={50}className="cursor-pointer"></FaWhatsapp>
                            COMEÇAR MEU PROJETO 
                          </a>
                      </div>
                    </motion.div>
                  </div>           

              </section>

              <section className="hero5pc flex justify-center items-center p-4"
              id="avaliações">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween = {30}
                  navigation
                  //autoplay = 5000
                  className=" h-[400px] w-full"
                  breakpoints={{
                    320: {
                      slidesPerView: 1.3,
                      spaceBetween: 20
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
                      slidesPerView: 3,
                    },
                    1250:{
                      slidesPerView: 3,
                    },
                    1600:{
                      spaceBetween: 0,
                      slidesPerView: 4.5,
                    }
                  }}
                >

                  <SwiperSlide className="">

                    <div className="slidepc rounded-xl p-2 mt-5" >
                      <img src={mt} className="imgpc"></img>
                      <div className="w-full">

                        <p className="w-[280px]  h-[230px] text-md mt-2">"O atendimento foi excelente do início ao fim. A Porto Avl entendeu exatamente o que eu precisava e traduziu isso em um projeto profissional, criativo e bem alinhado com a proposta da minha marca. Comunicação clara, prazos respeitados e um resultado acima do esperado."</p>

                        <h1 className="luf font-bold">Matheus Borges</h1>

                      </div>

                      
                    </div>

                  </SwiperSlide>

                  <SwiperSlide>

                    <div className="slidepc rounded-xl p-2 mt-5">
                      <img src={sla} className="imgpc"></img>
          
                        <p className="w-[280px]  h-[230px] text-md mt-2">"Desde o primeiro contato, o processo foi muito organizado e transparente. O cuidado com os detalhes e a preocupação em entregar algo que realmente representasse a empresa fizeram toda a diferença. O resultado final ficou moderno, funcional e muito bem pensado.!"</p>

                        <h1 className="luf font-bold">Yuri Miranda</h1>

                    </div>

                  </SwiperSlide>

                  <SwiperSlide>

                    <div className="slidepc rounded-xl p-2 mt-5">
                      <img src={Leo} className="imgpc"></img>
                      
                        <p className="w-[280px]  h-[230px] text-md mt-2">"A experiência foi extremamente positiva. O atendimento é próximo, atencioso e passa muita segurança durante todo o desenvolvimento do projeto. O trabalho entregue superou as expectativas, mostrando profissionalismo, criatividade e um domínio muito forte de identidade visual."</p>

                        <h1 className="luf font-bold">Leonardo</h1>

                    </div>

                  </SwiperSlide>

                  <SwiperSlide className="">

                    <div className="slidepc rounded-xl p-2 mt-5" >
                      <img src={mth} className="imgpc"></img>
                      <div className="w-full">

                        <p className="w-[290px]  h-[230px] text-md mt-2">"Trabalhar com a Porto Avl foi uma experiência extremamente positiva. Desde o primeiro contato, ficou claro o cuidado em entender a essência da minha marca. O processo foi organizado, a comunicação sempre objetiva e o resultado final superou minhas expectativas, unindo criatividade, estratégia e profissionalismo."</p>

                        <h1 className="luf font-bold">Maria Paulla</h1>

                      </div>

                      
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className="">

                    <div className="slidepc rounded-xl p-2 mt-5" >
                      <img src={mp} className="imgpc"></img>
                      <div className="w-full">

                        <p className="w-[280px]  h-[230px] text-md mt-2">"A Porto Avl entregou muito mais do que eu esperava. O projeto foi desenvolvido com atenção aos detalhes, respeito aos prazos e uma visão criativa que realmente fez a diferença para a minha marca. Todo o atendimento foi ágil e transparente, transmitindo confiança em cada etapa do processo."</p>

                        <h1 className="luf font-bold">Matheus</h1>

                      </div>

                      
                    </div>

                  </SwiperSlide>
                  
                </Swiper>

                      
              </section>

              <section className="hero4pc mt-[-5px] " id="soluções">

                  <div className="w-full ml-18 mt-4">
                    <h1 className="nelius text-4xl text-black">Nossas Soluções</h1>
                  </div>
                
                <section className="hero4-2pc rounded-t-2xl flex justify-center items-center bg-black lg:items-start">

                  <div className=" flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-start">

                      <div className="p-4 flex flex-col justify-center items-center">
                        <img src={card1} alt="card um" className="w-100"/>

                        <a
                          className="button nelius mt-2 flex justify-center items-center
                          gap-3"
                          href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20na%20cria%C3%A7%C3%A3o%20da%20marca"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp size={30}></FaWhatsapp>
                          Quero uma criação da marca 
                        </a>
                      </div>

                      <div className="p-4 flex flex-col justify-center items-center">
                        <img src={card2} alt="card dois" className="w-100"/>

                        <a
                          className="button nelius mt-2 flex justify-center
                           items-center gap-3"
                          href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20na%20identidade%20visual"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp size={30}></FaWhatsapp>
                          Quero uma identidade visual 
                        </a>
                      </div>

                      <div className="p-4 flex flex-col justify-center items-center">
                        <img src={card3} alt="card tres" className="w-100"/>

                        <a
                          className="button nelius mt-2 flex  justify-center items-center gap-3"
                          href="https://wa.me/62982612708?text=Ol%C3%A1,%20estou%20interessado%20no%20projeto%20de%20branding"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp size={30}></FaWhatsapp>
                          Quero um projeto de branding 
                        </a>
                      </div>

                    
                  </div>



                </section>


              </section>

              <div className="linhaFooter"></div>

              <footer className='relative bg-black'>
                        <div className='w-full flex justify-center items-center'>
        
                            <img src={logo} alt="Escudo Goias" className='absolute w-[150px] z-30 mt-[-40px]'></img>
        
                        </div>
                    <div className='w-full flex justify-center items-center mt-20 '>
                            <div className='w-11/12 text-white flex flex-col justify-center items-center mt-4'>
                                <h1 className='text-xl font-bold luf'>REDES SOCIAIS</h1>
                                <div className='flex justify-center items-center  mt-2 mb-10'>
                                    <a href="https://www.instagram.com/portoavl/" target="_blank">
                                      <FaInstagram className="text-violet-300 cursor-pointer hover:text-white transition-all duration-600" size={40}></FaInstagram>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-white px-2 luf text-md mt-10">
                              Emai: <span  className="
                              ">Portoavlagencia@gmail.com</span>
                        </div>
                        <div className="text-gray-500 px-2 luf text-md">
                              <p className="text-white">Site desenvolvido por <a href="https://leoporto166.github.io/Portifolio_Online/" target="_blank">Leonardo Porto</a></p>
                        </div>


                        <div className="text-gray-500 px-2 luf text-sm mt-10 py-2">
                              2026 © PortoAvl <br />
                              CNPJ: 65.357.601/0001-00
                        </div>
              </footer>
          </div>
        )}


    </body>
  );
}