const STATE_LEVEL_FILLS = [
  "white",
  "#3598db",
  "#30cc70",
  "#f3c218",
  "#d58337",
  "#e84c3d",
];

const MENU_OPTIONS = [
  { label: "Lived there", level: 5, fill: "#e84c3d" },
  { label: "Stayed there", level: 4, fill: "#d58337" },
  { label: "Visited there", level: 3, fill: "#f3c218" },
  { label: "Alighted there", level: 2, fill: "#30cc70" },
  { label: "Passed there", level: 1, fill: "#3598db" },
  { label: "Never been there", level: 0, fill: "white" },
];

// The order of this array is strictly important as it's used in encoding/decoding URL
const STATES = [
  {
    id: "Abia",
    transform: "translate(427.5 375)",
    drawPath: "M-37.5 45l60-60 15-30h-30v15l-45 45z",
  },
  {
    id: "Adamawa",
    transform: "translate(330 465)",
    drawPath: "M-15-15L0 0v15h15v-30z",
  },

  {
    id: "Akwa Ibom",
    transform: "translate(352.5 435)",
    drawPath: "M-7.5 15l30-30h-45v30z",
  },

  {
    id: "Bulacan",
    transform: "translate(367.5 435)",
    drawPath: "M-22.5 15h45v-30h-15z",
  },

  {
    id: "Rizal",
    transform: "translate(390 465)",
    drawPath: "M-15 15h30V0L0-15h-15z",
  },

  {
    id: "Laguna",
    transform: "translate(390 495)",
    drawPath: "M-15 0H0v-15h15V0L0 15h-15z",
  },

  {
    id: "Camarines Norte",
    transform: "translate(487.5 495)",
    drawPath: "M-22.5 15V0l15-15h15l15 15v15h-15z",
  },

  {
    id: "Camarines Sur",
    transform: "translate(532.5 532.5)",
    drawPath:
      "M-22.5-22.5v15l30-2.262V-22.5l45 15-30 15-15 15h-15l-45-30 15-15z",
  },

  {
    id: "Catanduanes",
    transform: "translate(600 525)",
    drawPath: "M0-15l-15 30h30v-30z",
  },

  {
    id: "Albay",
    transform: "translate(555 562.5)",
    drawPath: "M-30-7.5l15 30h45v-30l-30-15-15 15z",
  },

  {
    id: "Sorsogon",
    transform: "translate(570 600)",
    drawPath: "M15-15h15v30H15V0h-30l-15-15z",
  },

  {
    id: "Occidental Mindoro",
    transform: "translate(345 600)",
    drawPath: "M-30-45h45l15 30v60L0 15v-30z",
  },

  {
    id: "Oriental Mindoro",
    transform: "translate(382.5 600)",
    drawPath: "M-22.5-45h30l15 30v30l-15 30h-15v-60z",
  },

  {
    id: "Iloilo",
    transform: "translate(480 741.63)",
    drawPath: "M-45 38.371l30-45v-15h45L45-38.37 30-6.63l-30 30z",
  },
];

const STATES_LENGTH = STATES.length;

export { STATES, STATE_LEVEL_FILLS, STATES_LENGTH, MENU_OPTIONS };
