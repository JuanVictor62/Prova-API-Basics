import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import CorPrimaria from './pages/corprimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Tabuada from './pages/tabuada'
import Temperatura from './pages/temperatura'
import Media from './pages/media'
import SomaPost from './pages/somaPost'
import SomaGet from './pages/somaGet'
import Dobro from './pages/dobro'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/corprimaria' element={<CorPrimaria/>} />
                <Route path='/frequencia' element={<Frequencia/>} />
                <Route path='/ingresso' element={<Ingresso/>} />
                <Route path='/maiorNumero' element={<MaiorNumero/>} /> 
                <Route path='/tabuada' element={<Tabuada/>} />
                <Route path='/temperatura' element={<Temperatura/>} />
                <Route path='/media' element={<Media/>} />
                <Route path='/somaPost' element={<SomaPost/>} />
                <Route path='/somaGet' element={<SomaGet/>} />
                <Route path='/dobro' element={<Dobro/>} />
            </Routes>
        </BrowserRouter>
    )
}