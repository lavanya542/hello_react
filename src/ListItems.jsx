import {CDN_URL} from "./utils/constants.js";
import {useDispatch} from "react-redux";
import {addItem} from "./utils/cartSlice";
 const ListItems=(items)=>{
    
    console.log(items);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
        
    }
  

    return (<div>
          
        {items.data.map((item)=>(
            <div key={item.card.info.id} className="w-10/12 m-auto flex flex-col md:flex-row justify-between border-solid border-b-2 items-center my-20" data-testid="cartid">
                <div  className="w-10/12 md:w-8/12 flex flex-col justify-center py-10 text-left my-8">
                    <div className="flex flex-col w-10/12">
           
                <span>{item.card.info.name}</span>
                <span>₹{item.card.info.price/100}</span>

                </div>
                
                <p className="w-full md:w-12/12 mt-8 text-xs">{item.card.info.description}</p>
               
                </div>
            <div className="3/12">
                <img src={CDN_URL+item.card.info.imageId} alt="Image" className="relative z-0 w-52 h-40 rounded-2xl mb-5"></img>
                <button className="absolute flex w-32 h-[2.9rem] text-center p-2 ml-10 mt-[-2rem] justify-center rounded-xl bg-white z-10 text-green-600 font-extrabold text-xl shadow-xl hover:bg-gray-200" onClick={()=>handleAddItem(item)}>
                     
                            ADD
                            </button>
                
                </div>
                </div>
        ))}
      
    </div>)
}
export default ListItems;