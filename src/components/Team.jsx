export function Team(){
  return(
    <section id="equipo" className="bg-black text-white py-20 px-8">
      <h3 className="text-4xl text-center mb-10">Equipo</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {[1,2,3].map(i=>(
          <div key={i} className="text-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-32 h-32 rounded-full mx-auto border-2 border-green-500"/>
            <h4 className="mt-4">Nombre</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
