import { useState, useEffect } from 'react'

function Dashboard() {
  const [sensores, setSensores] = useState([
    { id: 'temp',     nome: 'Temperatura', valor: 22.4,  unidade: '°C',  normalMin: 18, normalMax: 30,  cuidadoMin: 15, cuidadoMax: 33,  variacao: 0.3  },
    { id: 'pressao',  nome: 'Pressão',     valor: 101.3, unidade: 'kPa', normalMin: 95, normalMax: 105, cuidadoMin: 90, cuidadoMax: 110, variacao: 0.4  },
    { id: 'co2',      nome: 'CO2',         valor: 0.38,  unidade: '%',   normalMin: 0,  normalMax: 0.8, cuidadoMin: 0,  cuidadoMax: 1,   variacao: 0.05 },
    { id: 'bateria',  nome: 'Bateria',     valor: 87,    unidade: '%',   normalMin: 30, normalMax: 100, cuidadoMin: 20, cuidadoMax: 100, variacao: 0.2  },
    { id: 'vibracao', nome: 'Vibração',    valor: 0.12,  unidade: 'g',   normalMin: 0,  normalMax: 0.4, cuidadoMin: 0,  cuidadoMax: 0.6, variacao: 0.03 },
    ])

  const getStatus = (sensor) => {
    const { valor, normalMin, normalMax, cuidadoMin, cuidadoMax } = sensor
    if (valor >= normalMin && valor <= normalMax) return 'normal'
    if (valor >= cuidadoMin && valor <= cuidadoMax) return 'cuidado'
    return 'perigo'
  }

  const getStatusGeral = () => {
    if (sensores.some(s => getStatus(s) === 'perigo')) return 'PERIGO'
    if (sensores.some(s => getStatus(s) === 'cuidado')) return 'CUIDADO'
    return 'NORMAL'
  }

  const coresStatus = {
    normal:  { borda: 'border-white', titulo: 'text-white' },
    cuidado: { borda: 'border-yellow-400', titulo: 'text-yellow-400' },
    perigo:  { borda: 'border-red-500', titulo: 'text-red-500' },
  }

  const coresGeral = {
    NORMAL:  'text-green-400',
    CUIDADO: 'text-yellow-400',
    PERIGO:  'text-red-500',
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
        setSensores(atual => atual.map(sensor => {
        if (sensor.id === 'bateria') {
            return { ...sensor, valor: parseFloat(Math.max(0, sensor.valor - 0.1).toFixed(2)) }
        }
        return {
            ...sensor,
            valor: parseFloat((sensor.valor + (Math.random() - 0.5) * sensor.variacao).toFixed(2))
        }
        }))
    }, 2000)

    return () => clearInterval(intervalo)
    }, [])

  return (
    <div
      className="min-h-screen px-16 py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/star.jpg')" }}
      aria-label="Imagem do céu estrelado ao fundo"
    >

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-5xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400 text-sm">Missão: Dragon CRS-32</p>
        </div>
        <div className="text-right">
          <p className={`text-lg font-bold mb-1 ${coresGeral[getStatusGeral()]}`}>
            {getStatusGeral()}
          </p>
          <p className="text-gray-400 text-sm">
            {new Date().toLocaleTimeString('pt-BR')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {sensores.slice(0, 3).map(sensor => {
          const status = getStatus(sensor)
          const cores = coresStatus[status]
          return (
            <div key={sensor.id} className={`p-6 border-2 rounded-xl ${cores.borda}`}>
              <h2 className={`font-bold text-lg mb-4 ${cores.titulo}`}>{sensor.nome}</h2>
              <p className="text-white text-4xl font-bold mb-1">{sensor.valor}</p>
              <p className="text-gray-400 text-sm">{sensor.unidade}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6 w-2/3 mx-auto">
        {sensores.slice(3).map(sensor => {
          const status = getStatus(sensor)
          const cores = coresStatus[status]
          return (
            <div key={sensor.id} className={`p-6 border-2 rounded-xl ${cores.borda}`}>
              <h2 className={`font-bold text-lg mb-4 ${cores.titulo}`}>{sensor.nome}</h2>
              <p className="text-white text-4xl font-bold mb-1">{sensor.valor}</p>
              <p className="text-gray-400 text-sm">{sensor.unidade}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Dashboard