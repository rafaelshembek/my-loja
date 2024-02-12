"use client"
import Link from "next/link"
import Image from "next/image";
import { ShoppingCartIcon, ShoppingBagIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useFakeProductApi from "../components/Fakestoreapi";


export default function Headers() {
    const [shoppingCart, setChoppingCart] = useState(0)
    const [showModalInput, setShowModalInput] = useState('')
    const [capituryTextInput, setCapituryTextInput] = useState('')
    const [testeProd, setTesteProd] = useState('');
    const { data, loading, error } = useFakeProductApi();

    const InputModal = (e) => {
        setShowModalInput(e.target.value)
        setCapituryTextInput(e.target.value)
        setTesteProd(e.target.value)
    }
    const postProdutosShopping = () => {
        setChoppingCart(shoppingCart + 1)
    }

    const Links = [
        { link: "Inicio" },
        { link: "Contato" },
        { link: "Sobre Nos" },
    ]

    return (
        <>
            <nav className="flex flex-row justify-between items-center">
                <div id="logo" className="left-auto columns-md"><p className="flex items-center font-bold text-zinc-400"><GlobeAmericasIcon className="h-5 w-5 m-3" /> Nome da sua loja</p></div>
                <div className="columns-md flex items-center">
                    <input id="input-search-header" value={capituryTextInput} type="text" onChange={InputModal} placeholder="Buscar por categoria.." />
                    <ShoppingCartIcon style={{ position: "absolute", marginLeft: "1rem" }} className="h-4 w-5 text-zinc-500" />
                    {
                        // janela modal do input
                        showModalInput.length > 0 ? <div className="w-[500px] flex justify-center items-start flex-col bg-white shadow-md rounded-md p-4" style={{ position: "absolute", top: "5rem" }}>
                            <div className="mt-3 text-zinc-900 font-extralight">{capituryTextInput.length > 0 ? <p className="flex flex-row justify-center items-center"><ShoppingCartIcon className="h-5 w-5 mr-2 text-zinc-500" /> Buscando....</p> : "Error ao pequisar"}</div>
                            <p className="mt-3 w-full font-normal text-zinc-700 p-2 rounded-md bg-white">{data.map((produt) => {
                                {
                                    if (capituryTextInput == produt.category) {
                                        return <div className="flex flex-row justify-start items-center">
                                            <Image className="m-2" src={produt.image} height={25} width={25} alt={produt.description} />
                                            <a className="flex ml-3 mt-3" href={produt.id}>{capituryTextInput == produt.category ? produt.title : 'Produto não existe...'}</a>
                                        </div>
                                    }
                                }
                            })}</p>
                        </div> : showModalInput == ''
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