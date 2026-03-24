import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h2 variants={fadeUp} className="text-6xl font-bold mb-6">
          Lleva tu taller al siguiente nivel
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 mb-8 max-w-xl">
          Gestiona clientes, motos y servicios con tecnología moderna.
        </motion.p>
        <motion.div variants={fadeUp} className="flex gap-4 justify-center">
          <button className="bg-green-500 px-6 py-3 rounded hover:scale-110">Probar gratis</button>
          <button className="border px-6 py-3 rounded">Ver demo</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
