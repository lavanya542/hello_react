import Header from "../Header";
import {screen,fireEvent,render} from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";
import userContext from "../utils/UserContext";
test("Should render the header component and checks whether login button is there or not",()=>{
    render(<BrowserRouter><Provider store={appStore}><Header/></Provider></BrowserRouter>);
    const loginButton =screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
});
test("Should checks whether the header page has cart or not",()=>{
    render(<BrowserRouter><Provider store={appStore}><Header/></Provider></BrowserRouter>);
    const cartItems=screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
})
test("Should change login to logout whenever fireEvent fires",()=>{
    render(<BrowserRouter><Provider store={appStore}> <Header/> </Provider></BrowserRouter>);
    const loginButton =screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})
