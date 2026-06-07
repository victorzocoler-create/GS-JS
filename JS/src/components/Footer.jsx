function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-xs sm:text-sm">
      <div className="flex justify-center gap-4 md:gap-12 lg:gap-24 max-w-5xl mx-auto pt-8 pb-6 px-4 md:px-8">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-white font-bold mb-1">DragonWatch</h3>
          <p>Sistema de telemetria em tempo real para missões tripuladas.</p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-white font-bold mb-1">Contato</h3>
          <p>contato@dragonwatch.com</p>
          <p>+55 (11) 91234-5678</p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-white font-bold mb-1">Endereço</h3>
          <p>Av. Astronautas, 1701</p>
          <p>São José dos Campos, SP</p>
        </div>
      </div>
      <p className="text-center border-t border-gray-800 py-4">
        DragonWatch &copy; 2026 — Stack Force
      </p>
    </footer>
  )
}

export default Footer
