import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { useState } from "react";

export function Hero() {
  const [openInfo, setOpenInfo] = useState(false);
  return (
<section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">

  <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-16 items-center">

    {/* TEXTO */}
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center md:items-start text-center md:text-left md:pl-12 lg:pl-20"
    >
      <motion.h2
        variants={fadeUp}
        className="text-5xl md:text-5xl font-bold mb-6 leading-tight text-center"
      >
        Más control para tu taller,  <span className="text-green-500">más confianza para tus clientes</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg text-center"
      >
        <span className="text-green-500 font-semibold"> Gestiona </span>
        <span className="text-white font-semibold">Vehiculos</span>, 
        <span className="text-green-500 font-semibold"> organiza </span> 
        <span className="text-white font-semibold"> procesos</span> y 
        <span className="text-green-500 font-semibold"> mantén </span> a
        tus clientes <span className="text-white font-semibold">informados</span> en tiempo real desde una sola plataforma.
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
            Nuestra aplicación está diseñada para talleres de motos que buscan
            modernizar su forma de trabajar. Permite registrar cada vehículo con 
            su información, hacer seguimiento del estado del servicio, 
            gestionar citas, controlar costos y documentar el 
            proceso con fotos y repuestos utilizados.
            </p>

            <p className="mt-4 py-6 border-t border-gray-700">
            Además, envía notificaciones automáticas al cliente sobre el avance de su moto, 
            reduciendo llamadas innecesarias y generando mayor confianza. 
            Todo esto en una plataforma fácil de usar, accesible desde computador o celular,
             pensada especialmente para talleres pequeños y medianos.
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
