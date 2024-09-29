import cartImage from "../assets/cart.png"
import "../styles/navbar.css"

// eslint-disable-next-line react/prop-types
const Navbar = ({size}) => {
    return(
        <>
        <div className="header border-b-4 border-indigo-500 flex flex-row justify-between px-20 pt-3 bg-indigo-500 text-white">
            <div className="logo">
                <h1 className="heading">ResShop</h1>
            </div>
            <nav className="cart">
                <ul>
                    <li className="icon"><img src={cartImage} alt="" /></li>
                    <span>{size}</span>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar