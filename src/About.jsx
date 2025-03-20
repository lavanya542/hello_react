import {useContext} from "react";
import userContext from "./utils/UserContext";
const About=()=>{
    const data=useContext(userContext);
    return <div>
        <h1>About US</h1>
        <h2>Hi I'M Lavanya Nice To Meet You</h2>
        <h2>{data.loggedUserName}</h2>
    </div>
}
export default About;