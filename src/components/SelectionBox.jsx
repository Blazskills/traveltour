/* eslint-disable react/prop-types */
import { useMyStateData } from "../context/Context";
const SelectionBox = ({ pathId, event, openboxset }) => {
  const { handleClickData } = useMyStateData();
  const { target } = event;
  const pathBounds = target.getBoundingClientRect();
  const centerX = pathBounds.left + pathBounds.width / 2;
  const centerY = pathBounds.top + pathBounds.height / 2;

  const boxStyle = {
    position: "absolute",
    left: `${centerX}px`,
    top: `${centerY}px`,
    // backgroundColor: "white",
    // border: "1px solid #ccc",
    // padding: "10px",
    PointerEvent: "none",
    zIndex: 999, // Ensure the box appears on top of the SVG
  };

  const handleOptionClick = (option, fill) => {
    handleClickData(pathId, option, fill);
    openboxset(false);
    console.log(`Selected option for ${pathId}: ${option}`);
  };

  return (
    <div
      className="w-[200px] selection-box flex flex-col justify-center items-center gap-y-2 rounded-xl py-5 bg-white border-2 border-red-800"
      style={boxStyle}
    >
      <p className="font-extrabold capitalize text-center laptop1440up:text-[25px]">{pathId}:</p>
      <button
        onClick={() => handleOptionClick("5", "#166434")}
        className="hover:bg-green-800 hover:text-white w-full py-1 laptop1440up:text-[25px]" 
      >
        Lived there
      </button>
      <button
        onClick={() => handleOptionClick("4", "#573308")}
        className="hover:bg-[#573307] hover:text-white w-full py-1 laptop1440up:text-[25px]"
      >
        Stayed there
      </button>
      <button
        onClick={() => handleOptionClick("3", "#FACC14")}
        className="hover:bg-yellow-400 hover:text-white w-full py-1 laptop1440up:text-[25px]"
      >
        Visited there
      </button>
      <button
        onClick={() => handleOptionClick("2", "#1D40AF")}
        className="hover:bg-blue-800 hover:text-white w-full py-1 laptop1440up:text-[25px]"
      >
        Alighted there
      </button>
      <button
        onClick={() => handleOptionClick("1", "#F77171")}
        className="hover:bg-red-400 hover:text-white w-full py-1 laptop1440up:text-[25px]"
      >
        Passed there
      </button>
      <button
        onClick={() => handleOptionClick("0", "#ffffff")}
        className="hover:bg-slate-gray hover:text-white w-full pt-1 laptop1440up:text-[25px]"
      >
        Never been there
      </button>
    </div>
  );
};

export default SelectionBox;
