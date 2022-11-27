export default function Jogo(props){
    return(
        <main>
            <img src={`assets/forca${props.forcaCounter}.png`} data-test="game-image" />
            <div className="word-start">
                <button className="select-word" onClick={()=> props.selectWord()} data-test="choose-word" ><p className="cursor">Escolher Palavra</p></button>
                <div data-test="word">
                    <p className={props.fimDoJogo} data-test="word">{props.underlines}</p>
                </div>
            </div>
        </main>
    )
}