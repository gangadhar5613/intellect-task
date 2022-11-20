

function BarWidget(props)
{
    const { low2, low1, medium1, medium2, high } = props.barLevels
    let onLevelChange = props.onLevelChange;
    
    return (
      <section className="flex-col items-center gap-10  justify-center w-full ">
        <div className="text-center my-4">
          <h2 className="text-white  cursor-pointer shadow-2xl font-bold text-xl">
            {(low1 || low2) && (!medium1 || !medium2) && !high
              ? "Low"
              : (low1 || low2) && (medium1 || medium2) && !high
              ? "Medium"
              : (low1 || low2) && (medium1 || medium2) && high
              ? "High"
              : "Select Value"}
          </h2>
        </div>
        <div className="grid   gap-6 justify-items-center text-center ">
          <div
            onClick={(event) => onLevelChange("high")}
            className={`high-4 ${
              high ? "bg-white" : "bg-slate-400"
            }  shadow-xl rounded-lg  cursor-pointer rounded-b-xl   w-56   h-9`}
          ></div>
          <div
            onClick={(event) => onLevelChange("medium1")}
            className={`high-3  ${
              medium1 ? "bg-white" : "bg-slate-400"
            }  shadow-xl  rounded-lg  cursor-pointer rounded-b-xl  w-48 h-9`}
          ></div>
          <div
            onClick={(event) => onLevelChange("medium2")}
            className={`high-2 ${
              medium2 ? "bg-white" : "bg-slate-400"
            }   shadow-xl rounded-lg  cursor-pointer rounded-b-xl   w-40 h-9`}
          ></div>
          <div
            onClick={(event) => onLevelChange("low1")}
            className={`high-4 ${
              low1 ? "bg-white" : "bg-slate-400"
            }   shadow-xl rounded-lg  cursor-pointer rounded-b-xl   w-28 h-9`}
          ></div>
          <div
            onClick={(event) => onLevelChange("low2")}
            className={`high-1  w-8  rounded-b-md cursor-pointer ${ low2 ? 'traingle-down-white' : 'traingle-down'}  rounded-t-xl   h-9 `}
          ></div>
        </div>
      </section>
    );
}

export default BarWidget;