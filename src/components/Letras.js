export default function Letras(props) {
    

    return (
        <div class="alphabet">
            {props.alphabet.map(a => <button onClick={() => props.testCase(a)} className="cursor" disabled = {props.underlines.join('') == props.word || props.forcaCounter == 6} data-test="letter">{a.toUpperCase()}</button> )}
        </div>       
);
}