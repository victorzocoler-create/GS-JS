function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
      <span className="text-white font-bold text-xl tracking-widest">DragonWatch</span>
      <ul className="flex flex-wrap justify-center gap-4 lg:gap-8 list-none">
        <li><a href="#problema" className="text-white text-sm hover:text-blue-400 transition-colors">O Problema</a></li>
        <li><a href="#tecnologia" className="text-white text-sm hover:text-blue-400 transition-colors">Tecnologia</a></li>
        <li><a href="#como-funciona" className="text-white text-sm hover:text-blue-400 transition-colors">Como Funciona</a></li>
        <li><a href="#dashboard" className="text-white text-sm hover:text-blue-400 transition-colors">Dashboard</a></li>
        <li><a href="#equipe" className="text-white text-sm hover:text-blue-400 transition-colors">A Equipe</a></li>
      </ul>
    </nav>
  )
}

export default Navbar