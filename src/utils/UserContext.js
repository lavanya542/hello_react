import {createContext} from "react";
const userContext =createContext({
    loggedUserName:"Default user",
});
export default userContext;