export default function Jogo(props, {fimDoJogo, setFimDoJogo}){
    return(
        <main>
            <img src={`assets/forca${props.forcaCounter}.png`} data-test="game-image" />
            <div className="word-start">
                <button className="select-word" onClick={()=> props.selectWord()} data-test="choose-word" ><p className="cursor">Escolher Palavra</p></button>
                <div className={fimDoJogo} data-test="word">
                    {props.underlines}
                </div>
            </div>
        </main>
    )
}