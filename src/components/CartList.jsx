/* eslint-disable react/prop-types */
import DataItems from "./DataItems"
const CartList = ({ counterKurang, counterTambah }) => {

    return (
        <>
        <div className="">
            <div className="grid grid-cols-4 ml-10 gap-2 pt-5">
                <p className="underline decoration-violet-800 ml-5">Item</p>
                <p className="underline decoration-violet-800 ml-6">Harga</p>
                <p className="underline decoration-violet-800 ml-4">Kuantitas</p>
                <p className="underline decoration-violet-800">H. Total</p>
            </div>
            <DataItems counterKurang={counterKurang} counterTambah={counterTambah} />
        </div>
        
        </>
    )
}

export default CartList