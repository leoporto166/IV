import "./Seg.css";
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

export default function SegParte() {
  return (
    <div>
      <section className="hero">
        <img src={farol} alt="Farol Porto" className="farol mb-14" />
        <div className="feixe"></div>
        <div className="luz"></div>
        <div className="texto">
          <img src={Logo} alt="Logo Marca" className="absolute mt-[-130px]" />
          <h2 className="akira mt-2"
          style={{ fontFamily: "Akira" }}
          >Identidade Visual</h2>
          <span>Iluminando sua Marca</span>
        </div>
      </section>

          <section className="hero2 bg-white rounded-t-2xl mt-[-20px]">
            <div className="part1">
              <h1 className="text-2xl font-medium text-black
              ">Construa uma marca que seja <p className=" w-68 font-bold animation-text ">reconhecida e lembrada</p></h1>
              <h2 className="my-3 text-lg font-semibold text mx-13">Desenvolvemos identidades visuais pensadas para posicionar sua empresa com clareza, autoridade e consistência no mercado.</h2>
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
  );
}