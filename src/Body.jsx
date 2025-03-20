import Rescard,{AddLabel} from "./Rescard";

import {resList} from "./utils/mockData.js";
import {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import userContext from "./utils/UserContext.js";
const Body=()=>{
    //previously here we uses resList mcokdata but now we dont need bcoz we have api if we want we can add that in [] this place of use state
    const[listOfRes,setListOfRes] =useState([]);//here we can put empty array also because by using useEffect we can any how rerender the data by using swiggy api call
    useEffect(()=>{
        fetchData()
    },[]);
    const {loggedUserName,setUserName}=useContext(userContext);

    const[filteredListOfRes,setfilteredListOfRes]=useState(listOfRes);
    const fetchData=async ()=>{
        const data=await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const data_json=await data.json();
        // console.log(data_json);
        setListOfRes(data_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListOfRes(data_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const [filterValue,setFilterValue]=useState("");
    const LabelledListing=AddLabel(Rescard);

   if(listOfRes.length===0){
    // return <h1>Loading---</h1>//we will use shimmer ui 
    return <Shimmer/>
   }
  
   
    return (
        < div className="body">
            <input type="text" value={filterValue} data-testid="searchInput" onChange={(e)=>{setFilterValue(e.target.value)}} className="border border-gray-400 rounded p-1 m-4"></input>
            <button data-testid="searchBtn" onClick={()=>{setfilteredListOfRes(listOfRes.filter((res)=>res.info.name.toLowerCase().includes(filterValue.toLowerCase())))}} className="p-2 m-4">search</button>
           <button className="border border-gray-400 rounded p-1 m-4" onClick={()=>{
            setfilteredListOfRes(listOfRes.filter((res)=>res.info.avgRating>4.2));
           }}>
            {/* {console.log(filteredListOfRes)} */}
            Click to filter
           </button>
           <input type="text"  value={loggedUserName} onChange={(e)=>(setUserName(e.target.value))} className="border border-gray-400 rounded p-1 m-4"></input>
            <div className="flex flex-wrap gap-4">
                {
                    filteredListOfRes.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        {restaurant.info.isOpen?<Rescard resData={restaurant.info}/>:<LabelledListing resData={restaurant.info}/>}</Link>))
                        
}
            
           

            </div>
            
                

            
        </div>
    )
}
export default Body;