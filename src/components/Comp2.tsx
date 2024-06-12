import React from "react";

class Comp2 extends React.Component {
  componentDidMount() {
    console.log("Comp2 commited");
  }

  render() {
    console.log("Comp2 rendered");
    return <div>Comp2</div>;
  }
}

export default Comp2;
