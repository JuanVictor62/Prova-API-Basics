import { useState } from 'react'

import axios from 'axios'

export default function Index() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [resposta, setResposta] = useState(0);


    async function Media() {
        const resp = await axios.post('http://localhost:5000/media', {
            n1: nota1,
            n2: nota2,
            n3: nota3 
        })
        setResposta(resp.data.resposta);
    }
    return(
        <main>
            <div>
                <h1>Média</h1>
            </div>
            <div>
                nota 1 <input type="text" value={nota1} onChange={e => setNota1(Number(e.target.value))} />
            </div>
            <div>
                nota 2 <input type="text" value={nota2} onChange={e => setNota2(Number(e.target.value))} />
            </div>
            <div>
                nota 3 <input type="text" value={nota3} onChange={e => setNota3(Number(e.target.value))} />
            </div>
            <div>
                <button onClick={Media}>Consultar</button>
            </div>
            <div>
                a media do aluno é: {resposta}
            </div>
        </main>
    )
        
}
