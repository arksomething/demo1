import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState('')

  const fetchQuote = async () => {

    const response = await axios.post('https://helloworld-rgzyvy3rca-uc.a.run.app', {
      content: "You are an intellgent assistant.", prompt: "Give me a unique motivational quote."
    });
    setQuote(response.data) // Adjust based on your API response structure
  }

  return (
    <>
      <button onClick={fetchQuote}>Get Motivational Quote</button>
      {quote && <p>{quote}</p>} {/* Display the quote if it exists */}
    </>
  )
}

export default App
