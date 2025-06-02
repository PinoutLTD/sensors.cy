import { toFixed } from "./tools";

export default {
  label: "Noise Max.",
  name: {
    en: "Noise Max.",
    ru: "Шум Макс.",
    el: "Μέγιστος θόρυβος."
  },
  nameshort: {
    en: "Noise Max.",
    ru: "Шум Макс.",
    el: "Μέγιστος θόρυβος."
  },
  unit: "dB",
  range: [0, 50, 70, 85, 100],
  zones: [
    {
      value: 50,
      color: "#60bc2a",
      label: {
        en: "Faint",
        ru: "Тихо",
        el: "Λιποθυμία"
      }
    },
    {
      value: 70,
      color: "#12bfcc",
      label: {
        en: "Moderate",
        ru: "Удовлетворительно",
        el: "Μέτριος"
      }
    },
    {
      value: 85,
      color: "#ff9d00",
      label: {
        en: "Loud",
        ru: "Шумно",
        el: "Μεγαλόφωνος"
      }
    },
    {
      value: 100,
      color: "#ff4d00",
      label: {
        en: "Very loud",
        ru: "Очень шумно",
        el: "Πολύ δυνατά"
      }
    },
    {
      color: "#7a00da",
      label: {
        en: "Extremely loud",
        ru: "Экстремально шумно",
        el: "Εξαιρετικά δυνατός"
      }
    },
  ],
  calculate: function (v) {
    return toFixed(v);
  },
  info: "Noise is what your ears or noise sensor can sense. Measured in Decibel (dB).",
};