export default function Chute({arrChute,setArrChute,textoChute, setTextoChute , word, setUnderlines, forcaCounter, setForca, inGame, setInGame, setFimDoJogo, underlines}) {

    function chutarPalavra(){
        if(inGame){
        setArrChute([...arrChute, textoChute])
        if(textoChute == word){
            setUnderlines([word])
            setFimDoJogo(`venceu`)
            setInGame(false)
        }
        else{
            setForca(6)
            setUnderlines([word])
            setFimDoJogo(`perdeu`)
            setInGame(false)
        }
        setTextoChute("")
        }
    }
    return (
        <>
            <div class="guess-word">
                <p className="no-click">Já sei a palavra!</p>
                <input 
                onChange={(e) => inGame ? setTextoChute(e.target.value) : ""}
                value={textoChute}
                disabled = {underlines.join('') == word || forcaCounter == 5}
                data-test="guess-input"
                ></input>
                <button onClick={chutarPalavra} disabled = {underlines.join('') == word || forcaCounter == 5} className="cursor" data-test="guess-button">Chutar</button>
            </div>
        </>
    )
}