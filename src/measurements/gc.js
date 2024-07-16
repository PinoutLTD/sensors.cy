export default {
  label: "GC",
  name: {
    en: "Radiation",
    ru: "Радиация",
    el: "Ακτινοβολία",
  },
  unit: "μR/h",
  chartColor: "#e99152",
  range: [2, 10, 100, 1000],
  zones: [
    {
      value: 2,
      color: "#60bc2a",
      label: {
        en: "Background",
        ru: "Фоновая",
        el: "Φόντου",
      }
    },
    {
      value: 10,
      color: "#03a5ed",
      label: {
        en: "Moderate",
        ru: "Невысокая",
        el: "Χαμηλή",
      }
    },
    {
      value: 100,
      color: "#ff9d00",
      label: {
        en: "Elevated",
        ru: "Повышенная",
        el: "Αυξημένη",
      }
    },
    {
      color: "#ff4d00",
      label: {
        en: "High",
        ru: "Высокая",
        el: "Υψηλή",
      }
    },
  ],
};
