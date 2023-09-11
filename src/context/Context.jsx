import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export { StateContext };

// const initialState = {
//   Abia: "white",
//   Adamawa: "white",
//   Akwa_Ibom: "white",
//   Anambra: "white",
//   Bauchi: "white",
//   Benue: "white",
//   Borno: "white",
//   Bayelsa: "white",
//   Cross_River: "white",
//   Delta: "white",
//   Ebonyi: "white",
//   Edo: "white",
//   Ekiti: "white",
//   Enugu: "white",
//   Federal_Capital_Territory: "white",
//   Gombe: "white",
//   Imo: "white",
//   Jigawa: "white",
//   Kaduna: "white",
//   Kebbi: "white",
//   Kano: "white",
//   Kogi: "white",
//   Katsina: "white",
//   Kwara: "white",
//   Lagos: "white",
//   Nassarawa: "white",
//   Niger: "white",
//   Ondo: "white",
//   Ogun: "white",
//   Osun: "white",
//   Oyo: "white",
//   Plateau: "white",
//   Rivers: "white",
//   Sokoto: "white",
//   Taraba: "white",
//   Yobe: "white",
//   Zamfara: "white",
// };
const initialStates = [
  { state: "Abia", level: 0, fill: "white" },
  { state: "Adamawa", level: 0, fill: "white" },
  { state: "Akwa Ibom", level: 0, fill: "white" },
  { state: "Anambra", level: 0, fill: "white" },
  { state: "Bauchi", level: 0, fill: "white" },
  { state: "Benue", level: 0, fill: "white" },
  { state: "Borno", level: 0, fill: "white" },
  { state: "Bayelsa", level: 0, fill: "white" },
  { state: "Cross River", level: 0, fill: "white" },
  { state: "Delta", level: 0, fill: "white" },
  { state: "Ebonyi", level: 0, fill: "white" },
  { state: "Edo", level: 0, fill: "white" },
  { state: "Ekiti", level: 0, fill: "white" },
  { state: "Enugu", level: 0, fill: "white" },
  { state: "Federal Capital Territory", level: 0, fill: "white" },
  { state: "Gombe", level: 0, fill: "white" },
  { state: "Imo", level: 0, fill: "white" },
  { state: "Jigawa", level: 0, fill: "white" },
  { state: "Kaduna", level: 0, fill: "white" },
  { state: "Kebbi", level: 0, fill: "white" },
  { state: "Kano", level: 0, fill: "white" },
  { state: "Kogi", level: 0, fill: "white" },
  { state: "Katsina", level: 0, fill: "white" },
  { state: "Kwara", level: 0, fill: "white" },
  { state: "Lagos", level: 0, fill: "white" },
  { state: "Nassarawa", level: 0, fill: "white" },
  { state: "Niger", level: 0, fill: "white" },
  { state: "Ondo", level: 0, fill: "white" },
  { state: "Ogun", level: 0, fill: "white" },
  { state: "Osun", level: 0, fill: "white" },
  { state: "Oyo", level: 0, fill: "white" },
  { state: "Plateau", level: 0, fill: "white" },
  { state: "Rivers", level: 0, fill: "white" },
  { state: "Sokoto", level: 0, fill: "white" },
  { state: "Taraba", level: 0, fill: "white" },
  { state: "Yobe", level: 0, fill: "white" },
  { state: "Zamfara", level: 0, fill: "white" },
];
// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({ children }) => {
  const [stateClickedData, setStateClickedData] = useState(initialStates);

  //   const handleClickData = (state, option) => {
  //     stateClickedData.map((dataState) => {
  //       if (dataState.state == state) {
  //         console.log("state equall");
  //         console.log(dataState.fill)
  //         return;
  //       }
  //     });
  //   };
  const initialLevelSum = stateClickedData.reduce(
    (total, state) => total + state.level,
    0
  );

  // Create a state variable to hold the level sum
  const [levelSum, setLevelSum] = useState(initialLevelSum);

  useEffect(() => {
    // Update the level sum whenever the initialStates change
    const newLevelSum = stateClickedData.reduce(
      (total, state) => total + state.level,
      0
    );
    setLevelSum(newLevelSum);
  }, [stateClickedData]);

  //   console.log(levelSum);

  const handleClickData = (updatedState, option, fill) => {
    setStateClickedData((prevStates) => {
      return prevStates.map((prevState) => {
        if (prevState.state === updatedState) {
          // Use destructuring to update only the desired properties
          return { ...prevState, level: parseInt(option), fill: fill };
        }
        // Otherwise, return the previous state unchanged
        return prevState;
      });
    });
  };

  //   console.log(stateClickedData);

  return (
    <StateContext.Provider
      value={{
        stateClickedData,
        setStateClickedData,
        handleClickData,
        levelSum,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useMyStateData = () => useContext(StateContext);
