"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { TagIcon, QueueListIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Vitrine() {
    const url = "https://fakestoreapi.com/products?limit=6";
    const [produtos, setProdutos] = useState([])
    const [catego, setCatego] = useState();

    // CONSUMINDO A API DE PRODUTOS
    const GetProdutosApiFake = async () => {
        try {
            const response = await axios.get(url)
            setProdutos(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const SeachCategory = (e) => {
        setCatego(e.target.value);
    }
    useEffect(() => {
        GetProdutosApiFake();
    }, [])

    // console.log(produtos)

    return (
        <section id="container-vitrine" className="h-full m-10 p-5">
            <div className="flex justify-between flex-wrap items-center text-start text-zinc-500 p-4">
                <div className="flex items-center">
                    <h1 className="text-2xl flex items-center"><ShoppingCartIcon className="h-6 w-6 mr-4" />Produtos</h1>
                </div>
                <label style={{ right: 0 }} className="flex items-center justify-center flex-wrap">
                    <p className="mr-3 flex items-center">
                        Buscar por Categoria <QueueListIcon className="h-5 w-5 ml-3" />
                    </p>
                    <select id="select-categoria" value={catego} onChange={SeachCategory}>
                        {
                            produtos.map((categ) => {
                                return <><option value={categ.categoy}>{categ.category}</option></>
                            })
                        }
                    </select>
                </label>
            </div>
            <div className="flex justify-center bg-white items-start flex-wrap">
                {
                    produtos.map((produto) => {
                        if (produto.category == catego) {
                            return (
                                // CARD PRODUTOS
                                <button onClick={null} key={produto.id} className="flex justify-center items-center bg-white rounded-md flex-col m-5 w-80">
                                    <div className="flex justify-center items-center p-3">
                                        <Image style={{ width: 'auto', height: 'auto' }} alt={produto.description} height={100} width={100} src={produto.image} />
                                    </div>
                                    <div className="p-2 text-justify">
                                        <h1 className="m-2">{produto.title}</h1>
                                    </div>
                                    <div className="p-4 bg-white text-teal-900 rounded-md shadow-md" style={{ position: "absolute", marginTop: "-3rem", marginLeft: "-10rem" }}>
                                        <p className="flex items-center"><TagIcon className="h-5 w-5 mr-4" />{produto.category}</p>
                                    </div>
                                    <div className="flex w-full items-start flex-col p-4">
                                        <p className="text-2xl text-indigo-400 font-bold">R${produto.price}</p>
                                        <p className="text-zinc-500">ou 1x de R$50.00</p>
                                    </div>
                                </button>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}