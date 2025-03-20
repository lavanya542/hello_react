import {MockData} from "../utils/fetchMockData";
import Body from "../Body";
import {render,screen,fireEvent,waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockData);
        }
    })
});
test("should render out home page and do search",async()=>{
    render(<BrowserRouter><Body/></BrowserRouter>);
    await waitFor(() => expect(screen.getByTestId("searchInput")).toBeInTheDocument());

    const searchIp= screen.getByTestId("searchInput");
    const searchBtn=screen.getByTestId("searchBtn");
    fireEvent.change(searchIp,{target:{value:"burger"}});
    fireEvent.click(searchBtn);
    const cards=  screen.getAllByTestId("rescard");
    expect(cards.length).toBe(1);
    
});
test("should test our filtered restaurants",async()=>{
    render(<BrowserRouter><Body/></BrowserRouter>);
    await waitFor(()=>expect(screen.getByTestId("searchInput")).toBeInTheDocument());
    const filterBtn=screen.getByText("Click to filter");
    fireEvent.click(filterBtn);
    const cards=screen.getAllByTestId("rescard");
    expect(cards.length).toBe(15);

})