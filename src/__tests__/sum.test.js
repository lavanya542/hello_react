import sum from "../sum";

test("This should return sum of two numbers",()=>{
    const res=sum(28,1);
    expect(res).toBe(29);
})