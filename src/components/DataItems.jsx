/* eslint-disable react/prop-types */
import CartItem from "./CartItem"
import { useState } from "react"

const DataItems = ({ counterKurang, counterTambah }) => {

    //fetching data dari API
    const [dataItems, setDataItems] = useState([])

    async function getDataItems(){
        try{
            let URL = "https://fakestoreapi.com/products?limit=5"
            const res = await fetch(URL)
            const result = await res.json()

            setDataItems(result)
        }catch(e){
            console.log(e)
        }
    }

    getDataItems()

    return (
        <>
        <div>
            {dataItems.length == 0 ?
            <h1>Memuat Data....</h1> :
            <div>
                {dataItems.map((item) => (
                    <div key={item.id}>
                       <CartItem
                        gambar={item.image}
                        harga={item.price} 
                        counterKurang={counterKurang} 
                        counterTambah={counterTambah}
                        price={item.price}
                        /> 
                    </div>
                ))}
            </div>
            
            }
        </div>
        
        </>
    )
}

export default DataItems