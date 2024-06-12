import React from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

class App extends React.Component {
  componentDidMount() {
    console.log("App commited");
  }

  render() {
    console.log("App rendered");
    return (
      <div>
        App
        <Comp1 />
        <Comp2 />
      </div>
    );
  }
}
export default App;
