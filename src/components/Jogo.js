export default function Jogo(props, {fimDoJogo, setFimDoJogo}){
    return(
        <main>
            <img src={`assets/forca${props.forcaCounter}.png`} />
            <div className="word-start">
                <button className="select-word" onClick={()=> props.selectWord()}><p className="cursor">Escolher Palavra</p></button>
                <div class={fimDoJogo}>
                    {props.underlines}
                </div>
            </div>
        </main>
    )
}