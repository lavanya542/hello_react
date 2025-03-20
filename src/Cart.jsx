import {useSelector} from "react-redux";
import ListItems from "./ListItems";
import {clearCart} from "./utils/cartSlice";
import {useDispatch} from "react-redux";


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearStore=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4 font-bold text-xl ">
            <h1>Cart</h1>
            <ListItems data={cartItems}/>
            <button className="bg-black text-white w-28 border-black rounded text-sm" onClick={handleClearStore}>clear store</button>
        </div>
    )
}
export default Cart;