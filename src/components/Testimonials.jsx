export function Testimonials(){
  return(
    <section className="bg-gray-950 text-white py-20 px-8">
      <h3 className="text-4xl text-center mb-10">Testimonios</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {[1,2,3].map(i=>(
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <p className="text-gray-400">"Esta app mejoró mi taller totalmente"</p>
            <h4 className="mt-4 font-bold">Cliente</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
