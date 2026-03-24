import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export function Hero() {
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
        className="text-gray-400 mb-8 max-w-md"
      >
        Gestiona clientes, motos y servicios con tecnología moderna, rápida y eficiente.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex gap-4 justify-center md:justify-start"
      >
        <button className="bg-green-500 px-6 py-3 rounded-xl font-semibold 
          hover:scale-110 hover:shadow-green-500/40 hover:shadow-xl 
          transition duration-300">
          Más información
        </button>
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
        
        {/* Glow grande */}
        <div className="absolute w-[800px] h-[800px] bg-green-500 blur-[150px] opacity-20 rounded-full"></div>

        {/* Imagen circular */}
        <img
          src=""
          className="relative w-[500px] md:w-[420px] h-[300px] md:h-[420px] 
          object-cover rounded-full border-4 border-green-500 
          shadow-2xl hover:scale-105 hover:rotate-2 transition duration-500"
        />

      </div>
    </motion.div>

  </div>
</section>
  
  );
}
