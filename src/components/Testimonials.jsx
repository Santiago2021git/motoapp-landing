import { motion } from "framer-motion";

export function Testimonials() {

  const testimonials = [
    {
      name: "Carlos Ramírez",
      role: "Propietario de taller",
      text: "Se pierde mucho tiempo al responder llamadas. Necesitamos que nuestros clientes puedan ver el estado de su moto y asi nuestro equipo trabajara con mas tranquilidad"
    },
    {
      name: "Laura Gómez",
      role: "Propietaria de Motocicleta",
      text: "Me gustarian mas procesos con transparencia, me molesta estar preguntando que le estan haciendo a mi moto, y que me digan que esta lista cuando no es asi."
    },
    {
      name: "Andrés Mejía",
      role: "Administrador de taller",
      text: "Necesitamos una forma de llevar mejor los procesos en el taller, la organización en la agenda y citas,los ingresos y entregas de vehiculos, necesitamos cambios."
    },
    {
      name: "Santiago López",
      role: "Propietaria de Motocicleta",
      text: "Tener evidencia sobre el proceso de reparación de mi moto me daría mucha tranquilidad, aveces siento desconfianza al dejar mi moto en el taller porque no se que le estan haciendo y no se si es necesario."
    },
    {
      name: "Julian Herrera",
      role: "Mecánico",
      text: "Llevamos los procesos de forma manual, esto genera mucho desorden y diferentes problemas. Necesitamos una forma de organizar mejor los procesos a realizar y el orden en cada motocicleta."
    },
    {
      name: "Valentina Ortiz",
      role: "Propietaria de Motocicleta",
      text: "Me gustaria tener una forma de saber el estado de mi moto sin tener que estar llamando al taller, me generaria mas confianza y tranquilidad."
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-6 md:px-12">

      {/* Título */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Necesidades
      </motion.h3>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl 
                       hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl 
                       transition duration-300"
          >

            {/* Texto */}
            <p className="text-gray-300 italic leading-relaxed">
              “{item.text}”
            </p>

            {/* Usuario */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-center">
                {item.name}
              </h4>
              <span className="text-gray-500 text-sm text-center">
                {item.role}
              </span>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}