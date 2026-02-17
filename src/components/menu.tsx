
import "./menu.css"
import logo from "../img/LogoPorto1.png"

export function Menu(){

    return(

        <menu className="">

            <div className=" rounded-4xl menu mt-5">

                <img src={logo} className="w-22 h-20 ml-[-30px] mb-2"></img>

                <div className="flex gap-2 text-white gap-4">
                    <a href="#marcas" className="font-semibold luf text-sm">Marcas</a>
                    <a href="#porto" className="font-semibold luf text-sm">Porto</a>
                    <a href="#avaliações" className="font-semibold luf text-sm">Avaliações</a>
                    <a href="#soluções" className="font-semibold luf text-sm">Soluções</a>
                </div>

            </div>


        </menu>

    )

}