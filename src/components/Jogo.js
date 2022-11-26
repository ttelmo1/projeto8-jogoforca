export default function Jogo(props){
    return(
        <main>
            <img src={`assets/forca${props.forcaCounter}.png`} onClick = {()=> props.wrongWord()} />
            <div className="word-start">
                <button className="select-word" onClick={()=> props.selectWord()}><p className="cursor">Escolher Palavra</p></button>
                <div class="word">
                    {props.underlines}
                </div>
            </div>
        </main>
    )
}