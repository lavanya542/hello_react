import React ,{lazy,Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import About from "./About";
import Error from "./Error";
import useNetworkStatus from "./utils/useNetworkStatus";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import userContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Cart";

// const heading=React.createElement("h1",{id:"heading"},"Hello world from React");
// console.log(heading);
//const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// const parent=React.createElement("div",{id:"parent1"},React.createElement("div",{id:"parent2"},[React.createElement("h1",{id:"h1"},"I'm the first"),React.createElement("h1",{id:"h2"},"I'm the second")]
// ));
// root.render(parent);
//jsx
// const jsxHeading=<h1 className="head">Namaste Lavanya</h1>;
// root.render(jsxHeading);
//react functional components
// const Title=()=>{
//     return <h1>Namaste Title</h1>;
// }
// //This is called functional composition
// const FuncHeading=()=>{
//     return <div class="component">
        
//         <Title /> 
//         <h1 className="head">Namaste functional component</h1>
//         </div>
// }
// root.render(<FuncHeading/>)
//App

const Grocery=lazy(()=>import("./Groceries"));
const root=ReactDOM.createRoot(document.getElementById("root"));
const Main=()=>{
    const [userName,setUserName]=useState();
useEffect(()=>{
    const data={
        name:"Lavanya Rokkam"
    };
    setUserName(data.name);
},[])
    const status=useNetworkStatus();
    if(status===false){
        return(
            <div>
                <h1>No Network</h1>
            </div>
        )

    }
    return (
        <Provider store={appStore}>
        <userContext.Provider value={{loggedUserName:userName,setUserName}}>
        <div className="main">
            <Header/>
            <Outlet/>
        </div>
        </userContext.Provider >
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Main />,//child routes header is fix for all pages according to the route the body will change
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/groceries",
                element:<Suspense fallback={<h1>Loading.....</h1>}  ><Grocery/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },

        ],
        errorElement:<Error />,
    },
    
])
root.render(<RouterProvider router={appRouter}/>);