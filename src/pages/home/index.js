import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main>
            <h1> Home</h1>

            <ul>
                <li> <Link to="/corprimaria"> Cor Primaria </Link></li>
                <li> <Link to="/frequencia"> Frequencia </Link></li>
                <li> <Link to="/ingresso"> Ingresso </Link></li>
                <li> <Link to="/maiornumero"> Maior Numero </Link></li>
                <li> <Link to="/tabuada"> Tabuada</Link></li>
                <li> <Link to="/temperatura"> Temperatura</Link></li>
                <li> <Link to="/media"> Media</Link></li>
                <li> <Link to="/somaPost"> Soma Post</Link></li>
                <li> <Link to="/somaGet"> Soma Get</Link></li>
                <li> <Link to="/dobro"> Dobro</Link></li>
            </ul>
        </main>
    )
}