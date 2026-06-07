function Tecnologia() {
  return (
    <div className="min-h-[70rem] bg-black flex flex-col lg:flex-row">

      <div
        className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-cover bg-[center_40%]"
        style={{ backgroundImage: "url('/satelite.jpg')" }}
        aria-label="Imagem de satélite ao fundo"
      />

      <div className="w-full lg:w-1/2 flex flex-col px-8 lg:px-16 pt-12 pb-24 lg:pb-0 gap-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Tecnologia</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">ESP32</h2>
            <p className="text-white text-sm">Microcontrolador simulado no Wokwi com sensores monitorando os parâmetros da cápsula em tempo real.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">MQTT</h2>
            <p className="text-white text-sm">Protocolo leve de comunicação que transmite os dados dos sensores via rádio para a plataforma.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">NODE-RED</h2>
            <p className="text-white text-sm">Plataforma de backend que recebe, armazena e processa os dados enviados pelo ESP32.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">React</h2>
            <p className="text-white text-sm">Interface web que exibe os dados em tempo real com gráficos e alertas para a equipe de controle.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tecnologia
