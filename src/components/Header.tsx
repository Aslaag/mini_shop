import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ROUTES } from "../routes/Routes";
import { SwitchLanguage } from "./SwitchLanguage";


export function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div 
      className="flex flex-col justify-center items-center w-full gap-4 bg-lime-800/60 py-6 px-20 shadow-md shadow-lime-800/30">
        <h1 onClick={() => navigate(ROUTES.HOME)} 
        className="text-2xl">{t("mainTitle")}</h1>
        <SwitchLanguage />
    </div>
  )
}