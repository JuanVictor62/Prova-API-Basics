import { useState } from 'react'

import axios from 'axios'
import './index.scss';

export default function Index() {
    const [temperatura, setTemperatura] = useState(0);
    const [x, setResposta] = useState('');

    async function febre () {
        const resp = await axios.get(`http://localhost:5000/temperatura?grau=${temperatura}`)

        if( resp.data.x === true) {
            setResposta('Sim')
        }  else {
            setResposta('Não!')
        }

    }

    return(
        <main className='conteiner'>
            <div className='principal'>
                <h1> Temperatura </h1>
                <div className="conteudo">
                    <input className='input-style' type='text' placeholder='digite a temperatura' onChange={e => setTemperatura(e.target.value)} />
                </div>
                <div className='btn'>
                    <button className='btn-style' onClick={febre}>calcular</button>
                </div>
                <div className='resultado'>
                    febre: {x}
                </div>
            </div>

        </main>
    )
        
}