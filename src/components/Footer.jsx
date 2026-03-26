import { motion } from "framer-motion";
import { useState } from "react"; // 🔥 FALTABA ESTO
import { Formulario } from "./Formulario"; 

export function Footer() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <footer className="bg-black text-gray-400 pt-16 pb-8 px-6 md:px-12 border-t border-gray-800">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Logo.jpeg"
                alt="MotoTech"
                className="w-10 h-10 rounded-full border-2 border-green-500 shadow-lg"
              />
              <h2 className="text-white font-bold text-lg">MotoTech</h2>
            </div>

            <p className="text-sm leading-relaxed">
              Plataforma digital para talleres de motos que buscan organizar su negocio,
              mejorar la comunicación con clientes y aumentar sus ingresos.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <a href="#beneficios" className="hover:text-green-500 transition">Beneficios</a>
              <a href="#planes" className="hover:text-green-500 transition">Planes</a>
              <a href="#equipo" className="hover:text-green-500 transition">Equipo</a>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <a href="mailto:mototech@email.com" className="hover:text-green-500 transition">
                mototech@email.com
              </a>
              <a 
                href="https://w.app/moto-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                WhatsApp
              </a>
            </ul>
          </div>

          {/* REDES + CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>

            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/moto.techcol?igsh=aHkzdmFyY2doOWJ3" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                Instagram
              </a>
            </div>

            <button 
              onClick={() => setOpenForm(true)} 
              className="bg-green-500 text-black px-5 py-2 rounded-xl font-semibold 
              hover:scale-105 hover:shadow-green-500/40 hover:shadow-lg transition duration-300"
            >
              Pre-Registro
            </button>
          </div>

        </div>

        {/* LINEA DIVISORIA */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2026 MotoTech — Todos los derechos reservados
        </div>

      </footer>

      {/* 🔥 FORMULARIO FUERA DEL FOOTER (MEJOR PRÁCTICA) */}
      <Formulario
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
}