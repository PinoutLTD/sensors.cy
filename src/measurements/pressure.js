export default {
  label: "Pr",
  name: {
    en: "Atmospheric pressure",
    ru: "Атмосферное давление",
    el: "Ατμοσφαιρική πίεση"
  },
  nameshort: {
    en: "Pressure",
    ru: "Давление",
    el: "Πίεση"
  },
  unit: "mmHg",
  range: [0, 747, 767, 775],
  zones: [
    {
      value: 747,
      color: "#12bfcc",
      label: {
        en: "Very low",
        ru: "Очень низкое давление",
        el: "Πολύ χαμηλό"
      }
    },
    {
      value: 767,
      color: "#60bc2a",
      label: {
        en: "Normal",
        ru: "Нормальное давление",
        el: "Κανονικός"
      }
    },
    {
      value: 775,
      color: "#ff9d00",
      label: {
        en: "High",
        ru: "Высокое давление",
        el: "Υψηλή"
      }
    },
    {
      color: "#ff4d00",
      label: {
        en: "Very high",
        ru: "Очень высокое давление",
        el: "Πολύ υψηλή"
      }
    },
  ],
};
