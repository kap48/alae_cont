import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PhoneList from "./Components/PhoneList";

function App() {
  const handelToggel = id => {};

  return (
    <div>
      <Navbar />
      <Home />
      {/* <PhoneList handelToggel={handelToggel} /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
