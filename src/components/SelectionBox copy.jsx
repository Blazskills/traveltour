/* eslint-disable react/prop-types */
const SelectionBox = ({ data }) => {
  const { x, y, pathId } = data;

  const boxStyle = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    zIndex: 999, // Ensure the box appears on top of the SVG
  };
  const handleOptionClick = (option) => {
    // Handle the selected option here (e.g., store it in state or perform an action)
    console.log(`Selected option for ${pathId}: ${option}`);
  };
  return (
    <div className="selection-box" style={boxStyle}>
      <p>Select an option for {pathId}:</p>
      <button onClick={() => handleOptionClick("Option 1")}>Option 1</button>
      <button onClick={() => handleOptionClick("Option 2")}>Option 2</button>
    </div>
  );
};

export default SelectionBox;
