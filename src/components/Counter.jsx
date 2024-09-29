/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/counter.css"


const Counter = ({ counterKurang, counterTambah, price }) => {

    //state untuk kuantitas didalam list
    const [quantityList, setQuantityList] = useState(1)

    const kurangList = () => {
        quantityList > 1 ? setQuantityList(quantityList - 1) : quantityList
    }
    
    const tambahList = () => {
        setQuantityList(quantityList + 1)
    }

    //state harga
    const [hargaItem, setHargaItem] = useState(price)
    //update harga tiap kali quantity/kuantitas item berubah
    useEffect(() => {
        setHargaItem(quantityList * price)
    }, [price, quantityList])

    return (
        <>
        <div className="m-10 grid grid-cols-2 justify-between">
            <div>
                <button
                    onClick={() => {counterKurang(); kurangList()}}
                    className="px-2.5 focus:ring-2 bg-indigo-500 hover:bg-violet-600 text-white">-</button>
                <span className="px-2">{quantityList}</span>
                <button
                    onClick={() => {counterTambah(); tambahList()}}
                    className="px-2 focus:ring-2 bg-indigo-500 hover:bg-violet-600 text-white">+</button>  
            </div>
            <div className="grid grid-cols-2 gap-5 justify-end mb-10 mx-10">
                <p className="harga">$<span className="font-medium">{hargaItem}</span></p>
                <div className="btn2">
                    <button className="underline decoration-green-800"><span className="bayar">Bayar</span></button>
                </div>   
            </div>
            
        </div>
        </>
    )
}

export default Counter