import ListItems from "./ListItems";
import {useState} from "react";
const RestaurantCategory=({data,setShowList,showList})=>{
    
    // const [showList,setShowList]=useState(false);
    //uncontrolled one
    // const clickFunction=()=>{
    //     setShowList(!showList);

    // }
    const clickFunction=()=>{
        setShowList();
    }
    
    return <div>
        {/* header */}
        <div className="bg-gray-50 mx-auto my-4 shadow-lg w-6/12 cursor-pointer" onClick={clickFunction}>
            <div className="flex justify-between">
            <span className="font-bold text-lg"> {data.card.title}  ({data.card.itemCards.length})</span>
            <span>{">"}</span>
            </div>
            {/* body */}
            {showList&&<ListItems data={data.card.itemCards}/>}
        </div>
        
    </div>
}
export default RestaurantCategory;