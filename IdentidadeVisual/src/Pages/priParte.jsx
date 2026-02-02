import case1 from "../img/projeto1.png"
import case1Dois from "../img/projeto1.2.png"
import case1Tres from "../img/projeto1.3.png"

export default function PriParte(){

return(

    <body className="p-5 flex flex-col justify-center items-center">

        <div className="w-85 mt-10 a ">
            <div className="tudo">
                <section className="hero">
                     <div class="slider gap-3">
                        <img src={case1} />
                        <img src={case1Dois}/>
                        <img src={case1Tres} />
                    </div>
                    <div className="content">
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

            <section className="mt-20">

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

            <section className="mt-20">

                <h2 className="text-xl font-medium">Transformação de marca</h2>

                <div className="linha"></div>

                <div className="mt-10 flex flex-wrap gap-2 ">
                    <img src={case1} className="w-40 rounded-4xl shadow-white/10 shadow-lg"></img>
                    <img src={case1Dois} className="w-40 rounded-4xl shadow-white/10 shadow-lg"></img>
                    <img src={case1Tres} className="w-full rounded-4xl shadow-white/10 shadow-lg"></img>
                </div>

            </section>
        </div>

    </body>

)

}