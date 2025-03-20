import {mockData} from "../utils/cartMockData";
import {screen,render,fireEvent,act,waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../utils/appStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockData);
        }
    })
})
test("should render restuarant component",async ()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><RestaurantMenu/><Header/><Cart/></Provider></BrowserRouter>));
    const name=screen.getByText("Recommended (6)");
    fireEvent.click(name);
    const foodItems=screen.getByText("Chicken Egg Bhurji");
    expect(foodItems).toBeInTheDocument(foodItems);
    const addBtn=screen.getAllByText("ADD");
    expect(addBtn.length).toBe(6);
    fireEvent.click(addBtn[0]);
    console.log("Cart State After Adding:", appStore.getState().cart.items); 

    const headerCart=screen.getByText("Cart (1)");
    expect(headerCart).toBeInTheDocument();
    const listings=screen.getAllByTestId("cartid");
    expect(listings.length).toBe(1);
    fireEvent.click(addBtn[1]);
    // await waitFor(()=>expect(screen.getByText("Cart (2)")).toBeInTheDocument());
    expect(listings.length).toBe(2);





})