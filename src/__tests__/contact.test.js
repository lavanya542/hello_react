import Contact from "../Contact";
import "@testing-library/jest-dom";
import {render,screen} from "@testing-library/react";
test("This is to check the contact page",()=>{
    render(<Contact/>);
    const heading=screen.getAllByRole("heading");
    expect(heading.length).toBeGreaterThan(0);
})
