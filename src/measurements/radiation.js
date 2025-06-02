export default {
  label: "GC",
  name: {
    en: "Background radiation",
    ru: "Радиационный фон",
    el: "Ακτινοβολία υποβάθρου"
  },
  nameshort: {
    en: "Radiation",
    ru: "Радиация",
    el: "Ακτινοβολία"
  },
  unit: "μR/h",
  chartColor: "#e99152",
  range: [10, 100, 1000],
  zones: [
    {
      value: 10,
      color: "#03a5ed",
      label: {
        en: "Background",
        ru: "Естественный фон"
      }
    },
    {
      value: 60,
      color: "#60bc2a",
      label: {
        en: "Moderate",
        ru: "Невысокая",
        el: "Μέτριος"
      }
    },
    {
      value: 100,
      color: "#ff9d00",
      label: {
        en: "Elevated",
        ru: "Повышенная",
        el: "Υπερυψωμένο"
      }
    },
    {
      value: 200,
      color: "#ff4d00",
      label: {
        en: "High",
        ru: "Высокая",
        el: "Ψηλά"
      }
    },
    {
      color: "#7a00da",
      label: {
        en: "Unacceptable",
        ru: "Неприемлемо"
      }
    },
  ],
};
