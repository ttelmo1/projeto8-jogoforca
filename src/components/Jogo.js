import { useState } from "react"


export default function Jogo(){

    const initialForca = 0;

    const [forcaCounter, setForca] = useState(initialForca)

    function wrongWord(){
        if(forcaCounter < 6){
            setForca(forcaCounter + 1)
        }
    }

    return(
        <main>
            <img src={`assets/forca${forcaCounter}.png`} onClick = {wrongWord} />
            <button className="select-word">
                <p>Escolher Palavra</p>
            </button>
        </main>
    )
}