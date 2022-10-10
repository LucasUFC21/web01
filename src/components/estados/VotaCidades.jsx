import { useState } from "react"

const VotaCidades = () => {

    const [quixada, setcontaquixada] = useState(0)
    const [limoeiro, setcontalimoeiro] = useState(0)
    const [crateus, setcontacrateus] = useState(0)

    const votarquixada = () => {
        setcontaquixada(quixada + 1)
    }

    const votarlimoeiro = () => {
        setcontalimoeiro(limoeiro + 1)
    }

    const votarcrateus = () => {
        setcontacrateus(crateus + 1)
    }

    const cidadecampea = () => {
        if (crateus > limoeiro && crateus > quixada) {
            alert("Cratéus Ficou no Top 1!!")
        } else if (quixada > limoeiro && quixada > crateus) {
            alert("Quixadá Ficou no Top 1!!")
        } else if (limoeiro > crateus && limoeiro > quixada) {
            alert("Límoeiro do Norte Ficou no Top 1!!")
        } else {
            alert("Houver um empate mais de uma cidade no top 1!!")
        }
    }

    return (
        <div>
            <div>
                <h2>Quixadá: {quixada}</h2>
                <h2>Limoeiro do Norte: {limoeiro}</h2>
                <h2>Crateús: {crateus}</h2>
            </div>
            <div>
                <button onClick={votarquixada}>Votar Quixadá</button>
                <button onClick={votarlimoeiro}>Votar Limoeiro do Norte</button>
                <button onClick={votarcrateus}>Votar Crateús</button>
                <br />
                <button onClick={cidadecampea}>Encerrar Votação</button>
            </div>
        </div>

    )

}

export default VotaCidades