import { useState } from 'react'

import axios from 'axios'

export default function Index() {
    const [valor, setValor] = useState(0);
    const [x, setResposta] = useState([]);

    async function tabuada() {
        const resp = await axios.get(`http://localhost:5000/tabuada?numero=${valor}`)

        setResposta(resp.data.x)
    }
    return(
        <div>
            <h1> Tabuada</h1>
            <div>
               tabuada do: <input type="text" value={valor} onChange={e => setValor(Number(e.target.value))} />
            </div>
            <div>
                <button onClick={tabuada}>calcular</button>
            </div>
            <div>
                resposta {x + ""}
            </div>
        </div>
    )
        
}