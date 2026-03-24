import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { useState } from "react";

export function Hero() {
  const [openInfo, setOpenInfo] = useState(false);
  return (
<section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* TEXTO */}
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center md:items-start text-center md:text-left md:pl-12 lg:pl-20"
    >
      <motion.h2
        variants={fadeUp}
        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Lleva tu taller <span className="text-green-500">al siguiente nivel</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg text-center"
      >
        Gestiona <span className="text-white font-semibold">clientes</span>, 
        <span className="text-white font-semibold"> motos</span> y 
        <span className="text-green-500 font-semibold"> servicios </span> 
        con tecnología moderna y eficiente.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center w-full text-center "
      >
        {/* BOTÓN */}
        <button
          onClick={() => setOpenInfo(!openInfo)}
          className="bg-green-500 px-8 py-3 rounded-xl font-semibold tracking-wide
          hover:scale-110 hover:shadow-green-500/40 hover:shadow-xl 
          transition duration-300 "
        >
          {openInfo ? "Ocultar información" : "Más información"}
        </button>

        {/* TEXTO DESPLEGABLE */}
        {openInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg"
          >
            <p>
              MotoTech es una plataforma diseñada para talleres de motos que permite
              gestionar clientes, historial de servicios, inventario y finanzas en un solo lugar.
            </p>

            <p className="mt-4">
              Optimiza tu tiempo, mejora la atención al cliente y aumenta tus ingresos
              con herramientas inteligentes y fáciles de usar.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>

    {/* IMAGEN */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Glow MÁS GRANDE */}
        <div className="absolute w-[550px] h-[550px] bg-green-500 blur-[180px] opacity-20 rounded-full"></div>

        {/* Marco circular MÁS grande */}
        <div className="w-[320px] md:w-[460px] h-[320px] md:h-[460px] 
          rounded-full border-[6px] border-green-500 
          shadow-2xl flex items-center justify-center 
          hover:scale-105 transition duration-500"
        >
          <img
            src="/Taller.jpg"
            alt="MotoApp"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

      </div>
    </motion.div>

  </div>
</section>
  
  );
}
