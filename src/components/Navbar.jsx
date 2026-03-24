import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition ${scrolled ? "bg-black/80 backdrop-blur shadow" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-8 py-4 text-white">
        <h1 className="font-bold text-xl">MotoApp 🏍️</h1>
        <div className="hidden md:flex gap-6">
          <a href="#beneficios">Beneficios</a>
          <a href="#planes">Planes</a>
          <a href="#equipo">Equipo</a>
        </div>
        <button className="bg-green-500 px-4 py-2 rounded hover:scale-105">Descargar</button>
      </div>
    </nav>
  );
}