import { useEffect, useState } from "react";
import { MENU_OPTIONS, STATES } from "../../utils/constants";
import SelectionBox from "../../components/SelectionBox";
import { useMyStateData } from "../../context/Context";
export const Home = () => {
  const { stateClickedData, levelSum } = useMyStateData();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const xOffset = 2;
  const yOffset = 2;

  const [mouseOverState, setMouseOverState] = useState();
  const [mouseOverStatePush, setMouseOverStatePush] = useState([]);
  const [openSelectionBox, setOpenSelectionBox] = useState(false);
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

  const [selectedPath, setSelectedPath] = useState(null);
  const [clickEvent, setClickEvent] = useState(null);

  const handleClick = (event, pathId) => {
    // setMouseOverState(null)
    setOpenSelectionBox(true);
    setSelectedPath(pathId);
    setClickEvent(event);
  };
  const handlePathMouseLeave = (pathId) => {
    // Re-enable pointer events on the SVG paths when the selection box is closed
    setMouseOverState(null);
    document.getElementById(pathId).style.pointerEvents = "auto";
  };

  const getFillColor = (stateId) => {
    const clickedState = stateClickedData.find(
      (state) => state.state === stateId
    );
    if (clickedState) {
      return clickedState.level === 0
        ? "white"
        : clickedState.level === 1
        ? "#F77171"
        : clickedState.level === 2
        ? "#1D40AF"
        : clickedState.level === 3
        ? "#FACC14"
        : clickedState.level === 4
        ? "#573308"
        : clickedState.level === 5
        ? "#166434"
        : "white";
    }
    return "#ffffff"; // Default color
  };

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (event) => {
      // Check if the click target is outside the SVG element
      if (!event?.target?.closest("svg")) {
        // Clicked outside, set outsidestate to false
        setOpenSelectionBox(false);
        setTooltipVisible(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("mouseleave", handleDocumentClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const [screenW, setScreenW] = useState(window.innerWidth);
  console.log(`live update ${window.innerWidth}`);
  useEffect(() => {
    // Function to update screen width
    const updateScreenWidth = () => {
      const newScreenWidth = window.innerWidth;
      setScreenW(newScreenWidth);
      console.log(newScreenWidth); // Log the updated screen width
    };

    // Add event listener for the "resize" event
    window.addEventListener("resize", updateScreenWidth);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <section className="">
      <div className="mb-[20px]">
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
        <div
          className={`flex flex-col ${
            screenW <= 768 ? "static m-1" : "fixed right-5 bottom-5 "
          }`}
        >
          <p className="mb-[12px] text-center tracking-normal font-montserrat font-medium text-[19px]">
            Nigeria Travel Level: {levelSum}
          </p>

          <div className="bg-green-500 rounded-2xl shadow-xl py-[10px]">
            {MENU_OPTIONS.map((info) => (
              <div key={info.label} className="px-5 py-2">
                <div className="flex flex-wrap items-center justify-between">
                  <div
                    className={`w-[40px] h-[30px] rounded-lg`}
                    style={{ background: info.fill }}
                  >
                    {" "}
                  </div>
                  <p className="tracking-normal font-montserrat font-medium text-[19px]">
                    {info.label}
                  </p>
                  <p className="tracking-normal font-montserrat font-medium text-[19px]">
                    Level: {info.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <svg
          viewBox="0 0 744.24 599.93"
          xmlns="http://www.w3.org/2000/svg"
          width={
            screenW < 320 && screenW <= 425
              ? "500"
              : screenW >= 769
              ? "2000"
              : "1500"
          }
          height={
            screenW <= 425
              ? "300"
              : screenW > 425 && screenW <= 1024
              ? "450"
              : screenW >= 1025 && screenW <= 1504
              ? "530"
              : "1500"
          }
          fill="green"
          enableBackground="green"
        >
          {STATES.map((state) => (
            <path
              className="bg-red-400 "
              key={state.id}
              id={state.id}
              fill={
                mouseOverState && mouseOverState === state.id.toString()
                  ? `gray`
                  : getFillColor(state.id)
              }
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
              onClick={(event) => handleClick(event, state.id.toString())}
              onMouseLeave={() => handlePathMouseLeave(state.id.toString())}
            ></path>
          ))}
        </svg>

        {openSelectionBox && selectedPath && clickEvent && (
          <SelectionBox
            pathId={selectedPath}
            event={clickEvent}
            openbox={openSelectionBox}
            openboxset={setOpenSelectionBox}
          />
        )}
      </div>
    </section>
  );
};
