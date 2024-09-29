import { useState } from 'react'
//import './App.css'
import Navbar from "./components/Navbar"

function App() {
  //State jumlah kuantitas Item
  const [quantity, setQuantity] = useState(5)

  

  return (
    <>
      <Navbar size={quantity} />
    </>
  )
}

export default App
