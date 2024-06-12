import { useEffect } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {
  useEffect(() => {
    console.log("App commited");
  }, []);

  console.log("App rendered");

  return (
    <div>
      App
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App;
