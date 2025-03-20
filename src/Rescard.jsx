import {CDN_URL} from "./utils/constants.js";
const Rescard=(props)=>{
    const {resData}=props;
    // console.log(resData);
    return (
        <div className="w-60 m-4 border border-gray-700 h-[400px] rounded hover: shadow-2xl " data-testid="rescard">
            <img alt="Biryani" src={CDN_URL+resData.cloudinaryImageId} className="w-60 h-60 rounded">

            </img>

            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.sla.deliveryTime}</h4>
            
        </div>
    )
}
export const AddLabel=(Rescard)=>{
    return (props)=>{
        return  ( <div>
            <label className="absolute border border-black text-white bg-black m-2">Closed</label>
            <Rescard {...props}/>
      
        
        </div>)
        

    }
}
export default Rescard;//default export no need to have {} while importing