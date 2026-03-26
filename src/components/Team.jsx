import { motion } from "framer-motion";
import { useState } from "react";

export function Team() {

  const [openIndex, setOpenIndex] = useState(null);

  const team = [
    {
      name: "Santiago Gallego",
      role: "Desarrollador Full Stack / Líder Técnico",
      img: "Persona.png",
      text: "Se encarga del diseño e implementación de la aplicación en frontend y backend, definiendo la arquitectura del sistema. Desarrolla funcionalidades clave como el registro de vehículos, gestión de estados y notificaciones. Además, integra la base de datos y realiza pruebas para garantizar el correcto funcionamiento de la aplicación.",
      link:"https://www.instagram.com/santiago.g_03?igsh=MWFjaXRzMW96YXVsNg%3D%3D&utm_source=qr"
    },
    {
      name: "Steven Grisales",
      role: "Diseñador UX/UI y Frontend",
      img: "Persona.png",
      text: "Se encarga de diseñar una interfaz atractiva e intuitiva para la aplicación y la landing page. Define la experiencia de usuario, crea prototipos y aplica estilos con herramientas como CSS o Tailwind. También asegura que la aplicación sea responsive y fácil de usar en diferentes dispositivos.",
      link:"https://www.instagram.com/stobi.exe?igsh=MXF6dWswdG1xNmhsZw=="
    },
    {
      name: "Luis Felipe Garzón",
      role: "Gestión del Proyecto y Negocios",
      img: "Persona.png",
      text: "Se encarga de analizar la viabilidad del proyecto y estructurar el modelo de negocio. Realiza la validación de la idea, la vigilancia tecnológica y la definición de requisitos. Además, desarrolla la documentación y apoya la preparación de presentaciones.",
      link:"https://www.instagram.com/luisfgarzon?igsh=d21qdTJ3NmFvMnJv"
    }
  ];


  return (
    <section id="equipo" className="bg-black text-white py-20 px-6 md:px-12">

      {/* Título */}
      <motion.h3 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Nuestro Equipo
      </motion.h3>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {team.map((member, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center 
                         hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl 
                         transition duration-300"
            >

              {/* Imagen */}
              <div className="flex justify-center">
                <img
                  src={member.img || "https://via.placeholder.com/150"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-green-500 
                             shadow-lg hover:scale-110 transition duration-300"
                />
              </div>

              {/* Nombre */}
              <h4 className="mt-6 text-xl font-semibold">
                {member.name}
              </h4>

              {/* Rol */}
              <p className="text-gray-400 mt-2">
                {member.role}
              </p>

              {/* Botón */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
                
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full sm:w-auto bg-green-500 px-6 py-3 rounded-xl font-semibold tracking-wide text-center
                  hover:scale-105 hover:shadow-green-500/40 hover:shadow-xl 
                  transition duration-300"
                >
                  {isOpen ? "Ocultar" : "Ver funciones"}
                </button>

                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent border border-green-500 text-green-500 px-6 py-3 rounded-xl font-semibold tracking-wide text-center
                  hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-green-500/40 hover:shadow-xl 
                  transition duration-300"
                >
                  Contacto
                </a>

              </div>

              {/* TEXTO DESPLEGABLE */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="text-green-400 mt-6 text-lg font-sans font-medium leading-relaxed text-center">
                  {member.text}
                </p>
              </motion.div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
