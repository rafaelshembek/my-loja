"use client"
import Link from "next/link"
import { ShoppingCartIcon, ShoppingBagIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default function Headers() {
    const [shoppingCart, setChoppingCart] = useState(0)
    const [showModalInput, setShowModalInput] = useState('')
    const [capituryTextInput, setCapituryTextInput] = useState('')


    // FUNÇÃO PARA ADICIONAR PRODUTOS NA SACOLA
    const InputModal = (e) => {
        setShowModalInput(e.target.value)
        setCapituryTextInput(e.target.value)
    }
    const postProdutosShopping = () => {
        setChoppingCart(shoppingCart + 1)
    }

    const Links = [
        { link: "Inicio" },
        { link: "Contato" },
        { link: "Sobre Nos" },
    ]
    console.log(showModalInput)

    return (
        <>
            <nav className="flex flex-row justify-between items-center">
                <div id="logo" className="left-auto columns-md"><p className="flex items-center font-bold text-zinc-400"><GlobeAmericasIcon className="h-5 w-5 m-3" /> Nome da sua loja</p></div>
                <div className="columns-md flex items-center">
                    <input id="input-search-header" type="text" onChange={InputModal} placeholder="O que esta procurando?" />
                    <ShoppingCartIcon style={{ position: "absolute", marginLeft: "1rem" }} className="h-4 w-5 text-zinc-500" />
                    {
                        showModalInput.length > 0 ? <div className="w-[500px] bg-white shadow-md rounded-md p-4" style={{ position: "absolute", top: "5rem" }}>{capituryTextInput}</div> : showModalInput == ''
                    }
                </div>
                <ul className="p-3 right-auto columns-md flex items-center" id="nav-ul">
                    {
                        Links.map((e, index) => {
                            return (
                                <>
                                    <Link key={index} className="p-2 m-2 rounded-md text-zinc-600" href={`/`} >{e.link}</Link>
                                </>
                            )
                        })
                    }
                    <div>
                        <Link className="p-2 m-2 rounded-md text-zinc-600 flex items-center" href={`/`}>
                            <ShoppingBagIcon className="h-6 w-6" />
                            <div className="bg-blue-400 ml-1 flex h-5 w-5 p-4 rounded-full text-white justify-center items-center"
                            >
                                {shoppingCart}

                            </div>
                        </Link>

                    </div>
                </ul>
            </nav>
        </>
    )
}