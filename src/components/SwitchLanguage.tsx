import { useTranslation } from "react-i18next";

export function SwitchLanguage() {
  const { i18n } = useTranslation();

  const switchLanguage = (lng: "fr" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-2 py-1 rounded ${
          i18n.language === "fr" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
