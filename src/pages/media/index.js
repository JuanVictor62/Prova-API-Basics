import { useState } from 'react'

import axios from 'axios'

export default function Index() {
    const [notaUm, setNotaUm] = useState(0);
    const [notaDois, setNotaDois] = useState(0);
    const [notaTres, setNotaTres] = useState(0);
    const [x, setResposta] = useState(0);


    async function Media() {
        const resp = await axios.post('http://localhost:5000/media', {
            n1: notaUm,
            n2: notaDois,
            n3: notaTres 
        })
        setResposta(resp.data.x);
    }
    return(
        <main>
            <div>
                <h1>Média</h1>
            </div>
            <div>
                nota 1 <input type="text" value={notaUm} onChange={e => setNotaUm(Number(e.target.value))} />
            </div>
            <div>
                nota 2 <input type="text" value={notaDois} onChange={e => setNotaDois(Number(e.target.value))} />
            </div>
            <div>
                nota 3 <input type="text" value={notaTres} onChange={e => setNotaTres(Number(e.target.value))} />
            </div>
            <div>
                <button onClick={Media}>Consultar</button>
            </div>
            <div>
                a media do aluno é: {x}
            </div>
        </main>
    )
        
}
