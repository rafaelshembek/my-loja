'use client'
import Headers from "../components/Header";
import Vitrine from "../components/Vitrine";
import Footer from "../components/Footer";
import BannerPromo from "../components/Carrossel/BannerPromo";

export default function Home() {

  return (
    <>
      <Headers />
      <section className="banner">
        <h1 className="text-teal-700 text-center text-6xl">Promoções da Semana</h1>
      </section>
      <Vitrine />
      <BannerPromo />
      <Footer />
    </>
  );
}
