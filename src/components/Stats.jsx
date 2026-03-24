export function Stats() {
  return (
    <section className="bg-black text-white py-16 grid grid-cols-2 md:grid-cols-4 text-center">
      {["+500 talleres","+10k servicios","+95% satisfacción","24/7 soporte"].map((s,i)=>(
        <h3 key={i} className="text-2xl font-bold text-green-400">{s}</h3>
      ))}
    </section>
  );
}
