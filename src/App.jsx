import { useState } from 'react'
//import './App.css'
import Navbar from "./components/Navbar"
import CartList from './components/CartList'

function App() {
  //State jumlah kuantitas Item
  const [quantity, setQuantity] = useState(5)

  //dua fungsi dibawah akan digunakan di dalam component Counter (props drilling)
  const counterKurang = () => {
    quantity > 5 ? setQuantity(quantity - 1) : quantity
  }

  const counterTambah = () => {
    setQuantity(quantity + 1)
  }


  return (
    <>
      <Navbar size={quantity} />
      <CartList counterKurang={counterKurang} counterTambah={counterTambah} />
    </>
  )
}

export default App
