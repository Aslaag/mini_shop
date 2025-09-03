import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import { SwitchLanguage } from "./SwitchLanguage";

export function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header
      className="relative flex flex-col md:flex-row justify-center items-center w-full gap-4 bg-lime-800/80 py-6 px-20 shadow-md shadow-lime-800/30"
    >
      <button
        onClick={() => navigate(ROUTES.HOME)}
        className="text-2xl font-bold text-white cursor-pointer rounded"
      >
        {t("mainTitle")}
      </button>
      <div className="absolute right-6">
        <SwitchLanguage />
      </div>
    </header>
  );
}
