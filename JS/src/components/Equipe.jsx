function Equipe() {
  const integrantes = [
    { nome: 'Victor Zocoler', rm: 'RM: 568234' },
    { nome: 'Eduardo Navarro', rm: 'RM: 568095' },
    { nome: 'Guilherme Pereira', rm: 'RM: 567487' },
  ]

  return (
    <div
      className="min-h-[50rem] bg-cover bg-center flex flex-col items-center justify-center px-6 md:px-8 lg:px-16"
      style={{ backgroundImage: "url('/ceu.jpg')" }}
      aria-label="Imagem do céu ao fundo"
    >
      <h1 className="text-white text-[2rem] md:text-5xl lg:text-7xl font-bold tracking-widest mb-4 text-center">STACK FORCE</h1>
      <div className="w-32 h-px bg-blue-400 mb-16" />

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {integrantes.map((pessoa) => (
          <div
            key={pessoa.rm}
            className="group flex-1 border rounded-xl border-white hover:border-blue-400 p-5 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <h2 className="text-white group-hover:text-blue-400 text-xl font-bold text-center transition-colors duration-300">{pessoa.nome}</h2>
            <p className="text-white group-hover:text-blue-400 transition-colors duration-300 text-sm">{pessoa.rm}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Equipe