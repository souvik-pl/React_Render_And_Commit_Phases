import { useEffect } from "react";

function Comp2() {
  useEffect(() => {
    console.log("Comp2 commited");
  }, []);

  console.log("Comp2 rendered");

  return <div>Comp2</div>;
}

export default Comp2;
