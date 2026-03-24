import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export function Benefits() {
  return (
    <section id="beneficios" className="bg-gray-950 py-20 px-8 text-white">
      <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl text-center mb-12">
        Beneficios
      </motion.h3>
      <motion.div variants={stagger} initial="hidden" whileInView="show" className="grid md:grid-cols-3 gap-8">
        {["Automatización","Más clientes","Control total"].map((b,i)=>(
          <motion.div key={i} variants={fadeUp} whileHover={{scale:1.05}} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="font-bold text-xl mb-2">{b}</h4>
            <p className="text-gray-400">Optimiza tu negocio.</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}