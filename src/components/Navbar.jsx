import { useState, useEffect } from "react";
import { Formulario } from "./Formulario"; // 👈 IMPORTANTE

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition ${
          scrolled ? "bg-black/80 backdrop-blur shadow" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-4 text-white">
          
          {/* LOGO + NOMBRE */}
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-xl">MotoTech</h1>
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-green-500 shadow-xl hover:scale-110 transition duration-300"
            />
          </div>

          {/* LINKS */}
          <div className="hidden md:flex gap-6">
            <a href="#beneficios" className="hover:text-green-400 font-medium transition">
              Beneficios
            </a>
            <a href="#planes" className="hover:text-green-400 font-medium transition">
              Planes
            </a>
            <a href="#equipo" className="hover:text-green-400 font-medium transition">
              Equipo
            </a>
          </div>

          {/* BOTÓN */}
          <button
            onClick={() => setOpenForm(true)}
            className="bg-green-500 px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            Registrarse
          </button>
        </div>
      </nav>

      {/* FORMULARIO */}
      <Formulario
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
}