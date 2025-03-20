import resList from "../utils/mockData";
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Rescard from "../Rescard";
test("Shoulde render my mock data",()=>{
    render(<Rescard resData={resList}/>);
    const name=screen.getByText("Jay Jalaram Thali");
    expect(name).toBeInTheDocument();
})