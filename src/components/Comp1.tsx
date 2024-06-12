import React from "react";

class Comp1 extends React.Component {
  componentDidMount() {
    console.log("Comp1 commited");
  }

  render() {
    console.log("Comp1 rendered");
    return <div>Comp1</div>;
  }
}

export default Comp1;