export default function Letras(props) {
    

    return (
        <div class="alphabet">
            {props.alphabet.map(a => <button onClick={() => props.testCase(a)} className="cursor">{a}</button> )}
        </div>       
);
}