// import { NigeriaMap } from "../../assets/images";
// import { me } from "../../assets/images";
import { svg4 } from "../../assets/images";
import { useState } from "react";
import { STATES } from "../../utils/constants";
import SelectionBox from "../../components/SelectionBox";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const xOffset = 2;
  const yOffset = 2;

  const handleMouseLeave = () => {
    setMouseOverState(null);
    setTooltipVisible(false);
  };
  const [mouseOverState, setMouseOverState] = useState();
  const [stateClickSelection, setStateClickSelection] = useState(false);
  const [mouseOverStatePush, setMouseOverStatePush] = useState([]);

  const handleMouseEnter = (event, mapStateName) => {
    setMouseOverState(mapStateName);
    setMousePosition({ x: event.clientX, y: event.clientY });
    const targetElement = event.target;
    const tooltipContent = targetElement
      ?.getAttribute("id")
      ?.replace(/_/g, " ");
    setTooltipContent(tooltipContent);
    setTooltipVisible(true);

    if (!mouseOverStatePush.includes(mapStateName))
      setMouseOverStatePush([...mouseOverStatePush, mapStateName]);
  };

  const onClickStateOptions = (event, stateClicked) => {
    setStateClickSelection(true);
    console.log("onclick pressed" + stateClicked);
  };

  const [selectedPath, setSelectedPath] = useState(null);
  const [selectionData, setSelectionData] = useState(null);
  const handleClick = (event, pathId) => {
    const clickX = event.clientX;
    const clickY = event.clientY;
    setSelectionData({ x: clickX, y: clickY, pathId });
  };

  return (
    <section className="">
      <div className="mb-[20px]">
        <p className="text-red-500 text-[23px]">
          {mouseOverState ? mouseOverState : "No name yet"}
        </p>
        {/* {itemList} {mouseOverStatePush.length} */}
        <div
          className={`bg-green-700 text-[white] w-fit ml-2 p-2 rounded-md relative font-palanquin`}
          style={{
            top: `${mousePosition.y + yOffset}px`,
            left: `${mousePosition.x + xOffset}px`,
            display: `${tooltipVisible ? "block" : "none"} `,
          }}
        >
          <p>{tooltipContent}</p>
        </div>
        <div className="flex flex-col bg-green-500 w-1/4 py-[10px] items-center rounded-2xl shadow-xl absolute right-0 bottom-[35%] ">
          <p className="px-10 bg-green-200">OPTION 1</p>
          <p>OPTION 2</p>
          <p>OPTION 3</p>
          <p>OPTION 4</p>
          <p>OPTION 5</p>
          <p>OPTION 6</p>
        </div>
        {/* <div
          className={`bg-purple-500 w-1/4 absolute bottom-10 text-[#fff]`}
          style={{
            top: `${mousePosition.y + yOffset}px`,
            left: `${mousePosition.x + xOffset}px`,
            display: `${stateClickSelection ? "block" : "none"} `,
          }}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div> */}
      </div>
      <div className="">
        <svg
          viewBox="0 0 744.24 599.93"
          xmlns="http://www.w3.org/2000/svg"
          width="1363"
          height="943"
          fill="none"
        >
          {STATES.map((state) => (
            <path
              className="bg-red-400"
              key={state.id}
              id={state.id}
              fill={mouseOverState === state.id.toString() ? `gray` : `#ffffff`}
              fillRule="nonzero"
              stroke="#000"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeWidth="1"
              d={state.drawPath}
              opacity="1"
              vectorEffect="non-scaling-stroke"
              name={state.id.toString()}
              onMouseOver={(event) =>
                handleMouseEnter(event, state.id.toString())
              }
              onMouseLeave={handleMouseLeave}
              // onClick={(event) => onClickStateOptions(event, state.id.toString())}
              onClick={(e) => handleClick(e, state.id.toString())}
            ></path>
          ))}
        </svg>
        {selectionData && (
        <SelectionBox data={selectionData} />
      )}
      </div>
    </section>
  );
};
