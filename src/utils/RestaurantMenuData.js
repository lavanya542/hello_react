import {RESTAURENT_MENU} from "./constants.js";
import {useState,useEffect} from "react";
const RestaurantMenuData=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData(resId);
    },[]);
    const fetchData=async (resId)=>{
        const data=await fetch(RESTAURENT_MENU+ resId);
        const data_json=await data.json();
        console.log(data_json);
        setResInfo(data_json);
    }
    return resInfo;
}
export default RestaurantMenuData;