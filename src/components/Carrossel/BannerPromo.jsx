'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import './Carrossel.css'

import imgs1 from '../../img/img_01.jpg'
import imgs2 from '../../img/img_02.jpg'



const imagens = [imgs1, imgs2];

const BannerPromo = () => {

    const [index, setIndex] = useState(0);
    const handlePrev = () => {
        setIndex(index === 0 ? imagens.length - 1 : index - 1);
    };
    const handleNext = () => {
        setIndex(index === imagens.length - 1 ? 0 : index + 1)
    }
    return (
        <>
            <section className="carrossel flex bg-zinc-100">
                <button id="btnPrev" className="btnCarrossel" onClick={handlePrev}></button>

                <Image width={"100%"} height={300} className="img-banner h-screen" src={imagens[index]} alt="imgs" />

                <button id="btnNext" className="btnCarrossel" onClick={handleNext}></button>
            </section>
        </>
    )
}

export default BannerPromo;