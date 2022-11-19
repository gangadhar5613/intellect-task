import { useState, useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SliderWidget from "./components/SliderWidget";
import BarWidget from "./components/BarWidget";
import "./App.css";


let initialBarValues = {
  low2: false,
  low1: false,
  medium1: false,
  medium2: false,
  high:false
}

function App() {
  const [currentWidget, setCurrentWidget] = useState("Slider");
  const [sliderValue, setSlidervalue] = useState(1);
  const [barLevels, setBarLevels] = useState(initialBarValues)

  const onSliderChange = (event) => {
    setSlidervalue(event.target.value);
  };

  const onLevelChange = (value) =>
  {
    setBarLevels({...barLevels, [value]:true})
  }

  const changeWidget = (widget) =>
  {
    setCurrentWidget(widget)
  }

  return (
    <section className="  m-auto p-6  h-screen  flex-col  bg-cyan-900 justify-center items-center ">
      <div className="heading h-1/6  flex items-center justify-center text-center">
        <h2 className="text-cyan-300 text-xl font-semibold">
          Select the widget to test.
        </h2>
      </div>
      <section className=" flex-col items-center justify-center gap-5 w-full    h-96">
        <div className="widgets-title gap-5  text-center my-4 flex  justify-center">
          <h3
            onClick={(event) => changeWidget("Slider")}
            className={` ${
              currentWidget == "Slider" ? "bg-cyan-600 text-white" : "bg-white"
            } px-4 py-2 border rounded-lg text-gray-700 font-bold cursor-pointer `}
          >
            Slider Widget
          </h3>
          <h3
            onClick={(event) => changeWidget("BarWidget")}
            className={`${
              currentWidget == "BarWidget"
                ? "bg-cyan-600 text-white"
                : "bg-white"
            } px-4 py-2 border rounded-lg text-gray-700 font-bold  cursor-pointer`}
          >
            Bar Widget
          </h3>
        </div>
        <section className="h-1/2 my-6  w-full">
          {currentWidget == "Slider" ? (
            <SliderWidget
              onSliderChange={onSliderChange}
              sliderValue={sliderValue}
            />
          ) : (
            <BarWidget onLevelChange={onLevelChange} barLevels={barLevels} />
          )}
        </section>
      </section>
    </section>
  );
}

export default App;
