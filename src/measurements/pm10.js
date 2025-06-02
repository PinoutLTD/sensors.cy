import { toFixed } from "./tools";

export default {
  label: "PM10",
  name: {
    en: "Particulate matter with diameter ≤ 10 µm (PM10)",
    ru: "Взвешенные частицы диаметром до 10 мкм (PM10)",
    el: "Σωματίδια με διάμετρο ≤ 10 µm (PM10)"
  },
  nameshort: {
    en: "PM10",
    ru: "PM10",
    el: "PM10"
  },
  unit: "μg/m3",
  chartColor: "#e8b738",
  colors: ["#60bc2a", "#ff9d00", "#fc0202"],
  range: [0, 51, 101, 251, 350],
  zones: [
    {
      value: 50,
      color: "#60bc2a",
      label: {
        en: "Good",
        ru: "Хорошо",
        el: "Καλός"
      }
    },
    {
      value: 100,
      color: "#12bfcc",
      label: {
        en: "Satisfyingly",
        ru: "Приемлемо",
        el: "Ικανοποιητικώς"
      }
    },
    {
      value: 250,
      color: "#ff9d00",
      label: {
        en: "Unhealthy",
        ru: "Вредно для здоровья",
        el: "Ανθυγιεινός"
      }
    },
    {
      value: 350,
      color: "#ff4d00",
      label: {
        en: "Very Unhealthy",
        ru: "Очень вредно для здоровья",
        el: "Πολύ ανθυγιεινό"
      }
    },
    {
      color: "#7a00da",
      label: {
        en: "Unacceptable",
        ru: "Неприемлемо",
        el: "Απαράδεκτος"
      }
    },
  ],
  calculate: function (v) {
    return toFixed(v);
  },
  info: "PM10 - suspended particles (PM - particulate matter) of a substance with a diameter of less than 10 micrometers (μm). Pollen and other allergens.",
};
