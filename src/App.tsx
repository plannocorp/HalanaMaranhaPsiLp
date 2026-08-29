import './App.css'
import Header from './components/header/header'
import AbordagemClinica from './pages/abordagem-clinica/abordagem-clinica'
import Contato from './pages/contato/contato'
import Home from './pages/home/home'
import SobreMim from './pages/sobre-mim/sobre-mim'

function App() {
  return (
    <>
      <Header />

      <Home />

      <SobreMim />

      <AbordagemClinica />

      <Contato />
    </>
  )
}

export default App
