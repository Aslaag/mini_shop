import { useTranslation } from "react-i18next";

export function SwitchLanguage() {
  const { i18n } = useTranslation();

  const switchLanguage = (lng: "fr" | "en") => {
    i18n.changeLanguage(lng);
  };

  console.log(i18n.language)

  return (
    <div role="group" aria-label="Sélecteur de langue" className="flex">
      <button
        onClick={() => switchLanguage("fr")}
        aria-pressed={i18n.language === "fr"}
        aria-label="Changer la langue en français"
        className={`px-2 py-1 rounded-l cursor-pointer transition-all duration-300 ${
          i18n.language === "fr" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-900 hover:text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage("en")}
        aria-pressed={i18n.language === "en"}
        aria-label="Switch language to English"
        className={`px-2 py-1 rounded-r cursor-pointer transition-all duration-300 ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-900 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
