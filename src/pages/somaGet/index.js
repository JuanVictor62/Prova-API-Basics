import { useState } from 'react'

import axios from 'axios'

export default function Index() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resposta, setResposta] = useState(0);

    async function Calcular() {
        const resp = await axios.get(`http://localhost:5000/somarGet?a=${numero1}&b=${numero2}`)
        setResposta(resp.data.x)
        } 
    
    return(
        <main>
            <div>
                <h1> Soma Get</h1>
            </div>
        
            <div>
                A Soma de <input type='text' value={numero1} onChange={e => setNumero1(Number(e.target.value))} /> 
                +
                <input type='text' value={numero2} onChange={e => setNumero2(Number(e.target.value))} />
            </div> 

            <div>
                <button onClick={Calcular} > Calcular </button>
            </div>

            <div>
                o Resultado é {resposta}
            </div>
        </main>

    )
        
}