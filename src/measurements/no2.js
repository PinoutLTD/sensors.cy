import { converterPpmToMgm3 } from "./tools";

export default {
  label: "NO2",
  name: {
    en: "Nitrogen Dioxide",
    ru: "Диоксид азота",
    el: "Διοξείδιο του αζώτου",
  },
  unit: "mg/m3",
  chartColor: "#d4dd53",
  colors: ["#60bc2a", "#ff9d00", "#fc0202"],
  range: [0, 1, 5],
  zones: [
    {
      value: 1,
      color: "#60bc2a",
      label: {
        en: "Good",
        ru: "Хорошо",
        el: "Πρόστιμο",
      }
    },
    {
      value: 5,
      color: "#ff9d00",
      label: {
        en: "Satisfyingly",
        ru: "Удовлетворительно",
        el: "Ικανοποιητικά",
      }
    },
    {
      color: "#fc0202",
      label: {
        en: "Poor",
        ru: "Плохо",
        el: "Κακώς",
      }
    },
  ],
  calculate: function (v) {
    return converterPpmToMgm3(v, 46.01);
  },
};
