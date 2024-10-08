export default {
  label: "Hm",
  name: {
    en: "Humidity",
    ru: "Влажность",
    el: "Υγρασία",
  },
  nameshort: {
    en: "Humidity",
    ru: "Влажность"
  },
  unit: "%",
  chartColor: "#6fd3ff",
  range: [30, 40, 60, 70],
  zones: [
    {
      value: 30,
      color: "#ff4d00",
      label: {
        en: "Very dry",
        ru: "Очень сухо",
        el: "Πολύ ξηρή",
      }
    },
    {
      value: 40,
      color: "#ff9d00",
      label: {
        en: "Dry",
        ru: "Сухо",
        el: "Ξηρή",
      }
    },
    {
      value: 60,
      color: "#03a5ed",
      label: {
        en: "Comfortable",
        ru: "Комфортно",
        el: "Άνετη",
      }
    },
    {
      value: 70,
      color: "#2a5cbc",
      label: {
        en: "Humid",
        ru: "Влажно",
        el: "Υγρός",
      }
    },
    {
      color: "#7a00da",
      label: {
        en: "Very humid",
        ru: "Очень влажно",
        el: "Πολύ υγρό",
      }
    },
  ],
};
