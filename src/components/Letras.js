export default function Letras(props) {
    

    return (
        <div className="alphabet">
            {props.alphabet.map(a => <button key={a} onClick={() => props.testCase(a)} className="cursor" disabled = {props.underlines.join('') == props.word || props.forcaCounter == 6 || props.letterBlock.includes(a)} data-test="letter">{a.toUpperCase()}</button> )}
        </div>       
);
}