import en from "./en";
import ru from "./ru";
import el from "./el";

export default { en, ru, el };

export const languages = [
  { code: "en", title: "English" },
  { code: "ru", title: "Русский" },
  { code: "el", title: "Ελληνικά" },
];

export const defaultLocale = localStorage.getItem("locale") || "en";