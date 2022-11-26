import Jogo from "./components/Jogo"
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import { useState } from "react";
import { randomWord } from "./palavras"

function App() {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [forcaCounter, setForca] = useState(0)
  const [word, setWord] = useState("")
  const [underlines, setUnderlines] = useState([])
  const [inGame, setInGame] = useState(false)
  const palavra = randomWord()
  const arr = (Array(palavra.length).fill("_\t"))
  
  console.log(word)
  console.log(underlines)

  function wrongWord(){
    if(forcaCounter < 5){
        setForca(forcaCounter + 1)
    }
    else{
        setForca(forcaCounter +1)
        setInGame(false)
    }
    
}
  function selectWord() {
    if(inGame){
      setWord(palavra)
      setUnderlines([...arr])
      setForca(0)
    }
    else{
      setInGame(true)
      setWord(palavra)
      setUnderlines([...arr])
      setForca(0)
    }
    
}
//Copiou array de word e usou filter para percorrer as letras 
//trocou cada underline pela letra
function testCase(a){
  if(inGame){
  if(word.includes(a)){
    [...word].filter((element, index)=> {
      if(element == a){
        underlines[index] = a
      }
    })
    setUnderlines([...underlines])
  }
  else{wrongWord()}
  }
}

  return (
    <>
      <Jogo selectWord={selectWord} word={word} underlines={underlines} wrongWord={wrongWord} forcaCounter={forcaCounter} inGame={inGame} setInGame={setInGame}/>
      <Letras testCase={testCase} alphabet={alphabet}/>
      <Chute />
    </>
  );
}

export default App;
