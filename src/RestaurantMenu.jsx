import RestaurantMenuData from "./utils/RestaurantMenuData";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo= RestaurantMenuData(resId);
    const [showList,setShowList]=useState(null);
    if (!resInfo) {
        return <h2>Loading...</h2>; // ✅ Show loading state until data is available
    }
    const {name, costForTwoMessage,cuisines,avgRating,cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info; 
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const nestedCategories  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    return <div className="text-center">
       <h1 className="text-bold my-6 text-2xl">{name}</h1>
       <p className="text-bold text-lg">{cuisines.join(",")}</p>
{/* categories accordions */}
        {categories.map((category,ind)=><RestaurantCategory key={ind} data={category.card} setShowList={()=>showList===ind?setShowList(null):setShowList(ind)} showList={showList===ind}/>)}
        { console.log(resInfo)}
        {console.log(resId)}
        {console.log(categories)}
        {console.log(nestedCategories)}
       
    </div>
}
export default RestaurantMenu;