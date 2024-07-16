import { toFixed } from "./tools";

export default {
  label: "Noise Max.",
  name: {
    en: "Noise max",
    ru: "Шум (максимальное)",
    el: "Θόρυβος (μέγιστος)",
  },
  unit: "dB",
  range: [0, 40, 70, 80, 100],
  zones: [
    {
      value: 40,
      color: "#60bc2a",
      label: {
        en: "Faint",
        ru: "Тихо",
        el: "Ησυχια",
      }
    },
    {
      value: 70,
      color: "#12bfcc",
      label: {
        en: "Moderate",
        ru: "Удовлетворительно",
        el: "Ικανοποιητικά",
      }
    },
    {
      value: 80,
      color: "#ff9d00",
      label: {
        en: "Loud",
        ru: "Шумно",
        el: "Θορυβώδης",
      }
    },
    {
      value: 100,
      color: "#ff4d00",
      label: {
        en: "Very loud",
        ru: "Очень шумно",
        el: "Πολύ θορυβώδες",
      }
    },
    {
      color: "#7a00da",
      label: {
        en: "Extremely loud",
        ru: "Экстремально шумно",
        el: "Εξαιρετικά θορυβώδες",
      }
    },
  ],
  calculate: function (v) {
    return toFixed(v);
  },
  info: "Noise is what your ears or noise sensor can sense. Measured in Decibel (dB).",
};
