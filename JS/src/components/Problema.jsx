function Problema() {
  return (
    <div
        className="min-h-[73rem] bg-cover bg-center flex flex-col justify-center px-6 md:px-8 lg:px-16"
        style={{ backgroundImage: "url('/background-lua.jpg')" }}
        aria-label="Imagem da superfície da lua ao fundo"
    >
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">O Problema</h1>
      <p className="text-white text-base md:text-xl max-w-2xl mb-8 md:mb-12">
        Missões tripuladas dependem de centenas de parâmetros simultâneos.
        Um atraso de segundos na detecção de uma anomalia pode ser fatal.
        Hoje, a maior parte dos sistemas de alerta é reativa — avisam quando
        o problema já aconteceu.
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <span className="text-white border border-white px-4 py-2 text-sm">ODS 9 — Inovação e Infraestrutura</span>
        <span className="text-white border border-white px-4 py-2 text-sm">ODS 11 — Cidades e Sistemas Inteligentes</span>
      </div>
    </div>
  )
}

export default Problema

