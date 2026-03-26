import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export function Benefits() {

  const benefits = [
    {
      title: "Automatización",
      description: "Organiza citas, servicios y seguimientos sin procesos manuales.",
      icon: "⚙️"
    },
    {
      title: "Más confianza",
      description: "Muestra avances, fotos y detalles del mantenimiento en tiempo real.",
      icon: "📈"
    },
    {
      title: "Control total",
      description: "Gestiona el estado de cada moto y el historial del servicio desde un solo lugar.",
      icon: "📊"
    }
  ];

  return (
    <section id="beneficios" className="bg-gray-950 py-20 px-6 md:px-12 text-white">

      {/* Título */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Beneficios
      </motion.h3>

      {/* Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >

        {benefits.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center
                       hover:shadow-green-500/20 hover:shadow-2xl transition duration-300"
          >

            {/* Icono */}
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            {/* Título */}
            <h4 className="font-semibold text-xl mb-3">
              {item.title}
            </h4>

            {/* Descripción */}
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>

          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}