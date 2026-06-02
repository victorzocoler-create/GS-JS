import Navbar from './components/Navbar'
import Problema from './components/Problema'
import Tecnologia from './components/Tecnologia'
import ComoFunciona from './components/ComoFunciona'
import Dashboard from './components/Dashboard'
import Equipe from './components/Equipe'

function App() {
  return (
    <div>
      <Navbar />
      <section id="problema"><Problema /></section>
      <section id="tecnologia"><Tecnologia /></section>
      <section id="como-funciona"><ComoFunciona /></section>
      <section id="dashboard"><Dashboard /></section>
      <section id="equipe"><Equipe /></section>
    </div>
  )
}

export default App