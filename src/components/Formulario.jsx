import { motion } from "framer-motion";

export function Formulario({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const correo = e.target.correo.value;
    const telefono = e.target.telefono.value;

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSehApFo52qCxbZ-CsxZD9nK7Cq5Cc8WTrVYaBuptgGC3T_TYw/formResponse";

    const data = new FormData();
    data.append("entry.931338952", nombre);
    data.append("entry.1328256209", apellido);
    data.append("entry.1565302097", correo);
    data.append("entry.196694094", telefono);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    // UX PRO 🔥
    alert("Registro enviado");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-[90%] max-w-md shadow-xl"
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/Logo.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-green-500 shadow-xl"
          />
          <h1 className="text-2xl font-bold text-white">
            PreRegistro MotoTech
          </h1>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            name="nombre"
            required
            placeholder="Nombre"
            className="bg-gray-800 text-white p-3 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
          />

          <input
            name="apellido"
            required
            placeholder="Apellido"
            className="bg-gray-800 text-white p-3 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
          />

          <input
            name="correo"
            type="email"
            required
            placeholder="Correo electrónico"
            className="bg-gray-800 text-white p-3 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
          />

          <input
            name="telefono"
            required
            placeholder="Teléfono"
            className="bg-gray-800 text-white p-3 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Enviar
          </button>
        </form>

        {/* CERRAR */}
        <button
          onClick={onClose}
          className="mt-4 text-gray-400 hover:text-white text-sm w-full"
        >
          Cancelar
        </button>
      </motion.div>
    </div>
  );
}