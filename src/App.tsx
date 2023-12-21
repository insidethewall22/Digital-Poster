import React from "react";
import "./App.css";
import FirstSection from "./sections/FirstSection/index";
import SecondSection from "./sections/SecondSection/index";
import ThirdSection from "./sections/ThirdSection/index";

const App = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default App;
