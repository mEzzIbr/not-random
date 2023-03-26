import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ar: {
        translation: {
          app: {
            generateNewText: "ولد أشعارًا جديدة",
            darkMode: "داكن",
            lightMode: "فاتح",
            isLoading: "جاري التحميل",
            clickToCopy: "انقر لنسخ النص",
            copied: "تم النسخ",
            clickToEdit: "انقر لتعديل النص",
            titlePoem: "عنوان القصيدة (نص قصير)",
            contentPoem: "محتوي القصيدة (نص طويل)",
          },
          titleText: {},
        },
      },
      en: {
        translation: {
          app: {
            generateNewText: "Generate New Text",
            darkMode: "Dark",
            lightMode: "Light",
            isLoading: "Loading",
            clickToCopy: "Click to copy",
            copied: "copied",
            clickToEdit: "click to edit",
            titlePoem: "The title of the poem (short text)",
            contentPoem: "Content of the poem (long text)",
          },
        },
      },
    },
  });

export default i18n;
