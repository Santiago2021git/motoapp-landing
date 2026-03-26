import { useState } from "react";

const problemsData = [
  {
    title: "Desorden en talleres",
    description: "En muchos talleres de motos, la gestión de los vehículos y servicios se realiza de forma manual, lo que genera desorden en la información y dificultad para llevar un control claro de los trabajos pendientes. Esto puede provocar retrasos, confusión y una baja eficiencia en las operaciones diarias.",
    align: "left",
  },
  {
    title: "Falta de comunicación",
    description: "La comunicación entre el taller y el cliente suele ser limitada o informal, dependiendo de llamadas o mensajes constantes. Esto dificulta que el cliente esté informado sobre el estado de su vehículo, generando incertidumbre y una experiencia poco satisfactoria.",
    align: "left",
  },
  {
    title: "Clientes insatisfechos",
    description: "La falta de información clara sobre los procesos, tiempos y costos del servicio puede generar desconfianza en los clientes. Cuando no se brinda un seguimiento adecuado, la percepción del servicio disminuye, afectando la fidelización y reputación del taller.",
    align: "right",
  },
  {
    title: "Pérdida de ingresos",
    description: "Una mala organización y gestión de los servicios puede llevar a la pérdida de oportunidades de negocio, errores en los cobros o retrasos en la atención. Esto impacta directamente en los ingresos del taller y limita su crecimiento.",
    align: "right",
  },
];

export function Problems() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-gray-950 text-white py-12 px-6 border-t border-gray-800">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">Problemas Comunes</h3>

      <div className="grid md:grid-cols-2 gap-3"> {/* ↓ menos espacio */}
        {problemsData.map((item, index) => (
          <div
            key={index}
            className={`relative flex ${
              item.align === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="bg-gray-900 p-4 rounded-xl border border-gray-800 w-full max-w-sm cursor-pointer 
              transition-all duration-300 
              hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h4 className="font-bold text-lg">{item.title}</h4>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm text-center">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}