import "./App.css";
import { useState } from "react";
import Navbar from "./Component/Navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}

export default App;
