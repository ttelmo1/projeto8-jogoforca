export default function Chute({arrChute,setArrChute,textoChute, setTextoChute , word, setUnderlines, forcaCounter, setForca, inGame, setInGame, endGame, underlines}) {

    function chutarPalavra(){
        if(inGame){
        setArrChute([...arrChute, textoChute])
        if(textoChute == word){
            setUnderlines([word])
            setInGame(false)
        }
        else{
            setForca(forcaCounter = 6)
            setUnderlines([word])
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