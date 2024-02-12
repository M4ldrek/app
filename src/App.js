import { useEffect, useRef } from "react";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const ref = useRef(null);

  // window.addEventListener("wheel", function (event) {
  //   if (event.deltaY < 0) {
  //     console.log("scroll up");
  //   } else {
  //     console.log("scroll down");
  //   }
  // });

  return (
    <div>
      <Home ref={ref} />
      <About ref={ref} />
      <Projects ref={ref} />
      <Contacts ref={ref} />
    </div>
  );
}

export default App;
