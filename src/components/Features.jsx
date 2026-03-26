import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { 
  Wrench, Bike, Bell, DollarSign, Users, Smartphone, Calendar, Camera, BarChart, Clock, Package
} from "lucide-react";

export function Features() {

  const funcionalidades = [
    {
      title: "Registro de vehiculos",
      desc: "Permite almacenar la información del vehículo (junto a información del proceso a realizar) y del propietario para un control organizado de los servicios.",
      icon: <Bike size={28} />
    },
    {
      title: "Seguimiento del estado",
      desc: "Muestra el estado del vehículo (sin atender, en proceso, finalizado) para un control claro del trabajo.",
      icon: <Wrench size={28} />
    },
    {
      title: "Notificaciones automáticas",
      desc: "Envía actualizaciones al cliente sobre el avance del servicio sin necesidad de llamadas.",
      icon: <Bell size={28} />
    },
    {
      title: "Gestión de citas",
      desc: "Programa y administra citas con clientes de manera eficiente.",
      icon: <Calendar size={28} />
    },
    {
      title: "Control de costos",
      desc: "Registra los costos de mano de obra y repuestos para un mejor control financiero.",
      icon: <DollarSign size={28} />
    },
    {
      title: "Evidencia del proceso",
      desc: "Permite subir fotos del proceso de reparación para transparencia y confianza con el cliente.",
      icon: <Camera size={28} />
    },
    {
      title: "Historial de servicios",
      desc: "Guarda un registro de todos los trabajos realizados a cada vehículo.",
      icon: <Users size={28} />
    },
    {
      title: "Control de tiempo",
      desc: "Monitorea el tiempo que un vehículo permanece en el taller sin ser atendido.",
      icon: <Clock size={28} />
    },
    {
      title: "Gestión de clientes",
      desc: "Administra la información de los clientes y facilita la comunicación con ellos.",
      icon: <Users size={28} />
    },
    {
      title: "Reportes y estadísticas",
      desc: "Genera reportes sobre el rendimiento del taller y el historial de servicios.",
      icon: <BarChart size={28} />
    },
    {
      title: "Registro de repuestos",
      desc: "Permite llevar control de los repuestos utilizados en cada servicio.",
      icon: <Package size={28} />
    },
    {
      title: "Acceso multiplataforma",
      desc: "Disponible en celular y computador en cualquier momento.",
      icon: <Smartphone size={28} />
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-6 md:px-12 relative overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute w-[600px] h-[600px] bg-green-500 blur-[200px] opacity-10 top-0 left-1/2 -translate-x-1/2"></div>

      {/* TÍTULO */}
      <motion.h3 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl md:text-4xl font-bold text-center text-green-500 mb-20"
      >
        Funcionalidades que transforman tu taller
      </motion.h3>

      {/* GRID */}
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {funcionalidades.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.06 }}
            className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 
                       transition duration-300 hover:shadow-green-500/20 hover:shadow-2xl"
          >

            {/* Glow hover */}
            <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-0 
                            group-hover:opacity-10 blur-xl transition duration-300"></div>

            {/* ÍCONO */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                            bg-green-500/10 text-green-500 mb-4 
                            group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            {/* TÍTULO */}
            <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition text-center">
              {item.title}
            </h4>

            {/* DESCRIPCIÓN */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-base text-center">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}