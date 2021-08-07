const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Husky"}),
    React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
    React.createElement(Pet, {name: "Biscuit", animal: "Dog", breed: "Labrador"}),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
