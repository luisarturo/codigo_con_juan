import Header from './components/Header'
import Formulario from './components/Formulario'
import './App.css'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  // const edad = 18

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
