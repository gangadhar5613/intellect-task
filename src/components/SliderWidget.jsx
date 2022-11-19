
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function SliderWidget(props)
{

 
    let slidervalue = props.sliderValue
    return (
      <section className="grid   justify-items-center  gap-8">
        <div className="  shadow-2xl rounded-full outline-dashed outline-gray-400 outline-2 outline-offset-1   w-56 h-56 p-5">
          <CircularProgressbarWithChildren
            className=""
            value={10 * slidervalue}
            background={true}
            styles={buildStyles({
              backgroundColor: "#466D7C",
              pathColor: "white",
              trailColor: "none",
            })}
            strokeWidth={4}
          >
            <div className=" h-2/3 flex items-center bg-[url('/images/bg.png')] bg-contain bg-repeat-round justify-center w-2/3  rounded-full">
              <h2 className="text-4xl  font-mono font-bold text-cyan-700">
                {slidervalue}
              </h2>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="w-full flex justify-center">
          <input
            onChange={props.onSliderChange}
            type="range"
            min="1"
            max="10"
            value={slidervalue}
            className="  w-3/4  shadow-lg  h-3 bg-cyan-300  md:w-2/6   cursor-pointer   rounded-3xl "
          />
        </div>
      </section>
    );
}






export default SliderWidget;