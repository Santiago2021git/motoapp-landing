import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-6 leading-tight">
            Lleva tu taller al siguiente nivel
          </h3>

          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Digitaliza la gestión de tu taller, mejora la comunicación con tus clientes 
            y organiza todos tus procesos desde una sola plataforma.
          </p>

          <a
            href="https://www.instagram.com/moto.techcol?igsh=aHkzdmFyY2doOWJ3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold
            hover:scale-110 hover:shadow-green-500/40 hover:shadow-xl 
            transition duration-300 inline-block"
          >
            Contáctanos
          </a>
        </motion.div>

        {/* IMÁGENES */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >

          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] bg-green-500 blur-[150px] opacity-20 rounded-full"></div>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            
            <img
              src="image1.png"
              className="rounded-xl object-cover w-full h-40 md:h-48 
              hover:scale-105 transition duration-300"
            />

            <img
              src="image2.png"
              className="rounded-xl object-cover w-full h-40 md:h-48 mt-6
              hover:scale-105 transition duration-300"
            />

            <img
              src="image3.png"
              className="rounded-xl object-cover w-full h-40 md:h-48
              hover:scale-105 transition duration-300"
            />

            <img
              src="image4.png"
              className="rounded-xl object-cover w-full h-40 md:h-48 mt-6
              hover:scale-105 transition duration-300"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};