import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export function Pricing() {

  const plans = [
    {
      name: "Gratis",
      description: "Ideal para talleres que quieren probar la plataforma",
      price: "$0",
      features: [
        "Registro básico de motos y clientes",
        "Seguimiento de hasta 15 vehiculos al mes",
        "Estado de proceso (Sin proceso, En proceso, Listo)",
        "Historial basico de mantenimiento",
        "1 Usuario administrador",
        "Soporte Basico"

      ],
      highlight: false
    },
    {
      name: "Pro",
      description:"Ideal para talleres pequeños que ya atienden varios servicios por semana",
      price: "$49.900 / mes",
      features: [
        "Todo lo del plan Gratis",
        "Servicios ilimitados",
        "Registro de evidencia con fotos y notas",
        "Notificaciones de avance para clientes",
        "Gestión de citas",
        "Historial completo por moto",
        "Hasta 3 usuarios del taller",
        "Panel de control con métricas básicas"
      ],
      highlight: true
    },
    {
      name: "Premium",
      description: "Ideal para talleres medianos que quieren dar una experiencia más profesional.",
      price: "$99.900 / mes",
      features: [
        "Todo lo del plan Pro",
        "Usuarios ilimitados",
        "Reportes avanzados de servicios e ingresos",
        "Estados personalizados del proceso",
        "Recordatorios automáticos de mantenimiento",
        "Mayor capacidad de almacenamiento de fotos",
        "Atención prioritaria",
        "Personalización de la plataforma con el logo del taller y nombre"
      ],
      highlight: false
    }
  ];

  return (
    <section id="planes" className="bg-black text-white py-20 px-6 md:px-12 text-center">

      {/* Título */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Planes
      </motion.h3>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-2xl border transition duration-300
              ${plan.highlight 
                ? "bg-green-500/10 border-green-500 shadow-green-500/20 shadow-2xl scale-105" 
                : "bg-gray-900 border-gray-800 hover:shadow-green-500/20 hover:shadow-2xl"
              }`}
          >

            {/* Nombre */}
            <h4 className="text-2xl font-bold mb-4">
              {plan.name}
            </h4>

            


            {/* Precio */}
            <p className="text-4xl font-extrabold mb-6">
              {plan.price}
            </p>

            {/* Descripción */}
            <p className="text-xl font-extrabold font-medium mb-6 text-green-500">
              {plan.description}
            </p>

            {/* Features */}
            <ul className="text-gray-300 space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-center items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Botón */}
            <button
              className={`px-6 py-3 rounded-xl font-semibold tracking-wide transition duration-300
                ${plan.highlight
                  ? "bg-green-500 hover:scale-110 hover:shadow-green-500/40 hover:shadow-xl"
                  : "border border-gray-600 hover:border-green-500 hover:text-green-400"
                }`}
            >
              Elegir plan
            </button>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
