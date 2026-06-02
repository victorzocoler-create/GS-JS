function ComoFunciona() {
  return (
    <div className="min-h-screen bg-[#213750] flex">


      <div className="w-1/2 flex flex-col justify-center px-16 gap-8">
        <h1 className="text-white text-5xl font-bold">Como Funciona</h1>

        <div className="flex flex-col gap-4">
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">1. Coleta</h2>
            <p className="text-white text-sm">O ESP32 lê os sensores da cápsula e coleta os parâmetros em tempo real.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">2. Transmissão</h2>
            <p className="text-white text-sm">Os dados são enviados via protocolo MQTT através do rádio da Dragon.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">3. Processamento</h2>
            <p className="text-white text-sm">O FIWARE recebe, armazena e processa os dados enviados pelo ESP32.</p>
          </div>
          <div className="group border-2 border-white hover:border-blue-400 p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h2 className="text-white group-hover:text-blue-400 font-bold text-lg mb-2">4. Visualização</h2>
            <p className="text-white text-sm">O dashboard React exibe os dados em tempo real e dispara alertas quando detecta anomalias.</p>
          </div>
        </div>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/jato.jpg')" }}
        aria-label="Imagem de jato da NASA ao fundo"
      />

    </div>
  )
}

export default ComoFunciona