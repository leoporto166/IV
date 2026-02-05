import "./Seg.css";
import farol from "../img/farol3.png";
import Logo from "../img/logoPorto2.png"

export default function SegParte() {
  return (
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
  );
}