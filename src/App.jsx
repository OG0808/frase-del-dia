
import { useEffect, useState } from 'react'
import './App.css'
import CardPhrase from './components/CardPhrase'

function App() {

const [count, setCount] = useState(0)

const btn = () => {
  setCount(count+1)
}

const [phrase, setPhrase] = useState('')
const [id, setid] = useState('')


  // const counter = () => {
  //   setCount(count + 1)
  // }

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setPhrase(data.slip.advice))
  }, [count])

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setid(data.slip.id))
  }, [count])


  


  return (
    <>
     <CardPhrase
     id={id}
     frase= {phrase}
     btn ={btn}
            
     />
    </>
  )
}

export default App
