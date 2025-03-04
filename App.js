// const heading=React.createElement("h1",{id:"heading"},"Hello world from React");
// console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent=React.createElement("div",{id:"parent1"},React.createElement("div",{id:"parent2"},[React.createElement("h1",{id:"h1"},"I'm the first"),React.createElement("h1",{id:"h2"},"I'm the second")]
));
root.render(parent);