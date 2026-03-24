import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export function Pricing() {
  return (
    <section id="planes" className="bg-black text-white py-20 px-8 text-center">
      <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl mb-10">
        Planes
      </motion.h3>
      <div className="grid md:grid-cols-3 gap-8">
        {["Gratis","Pro","Premium"].map((p,i)=>(
          <motion.div key={i} whileHover={{scale:1.08}} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="text-xl font-bold">{p}</h4>
            <p className="text-3xl my-4">$0</p>
            <button className="bg-green-500 px-4 py-2 rounded">Elegir</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
