import { useEffect } from "react";

function Comp1() {
  useEffect(() => {
    console.log("Comp1 commited");
  }, []);

  console.log("Comp1 rendered");

  return <div>Comp1</div>;
}

export default Comp1;
