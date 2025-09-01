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
        <h1 className="text-2xl">{t("mainTitle")}</h1>
        <div className="flex gap-4">
          <p 
            onClick={() => navigate(ROUTES.HOME)} 
            className="hover:text-amber-50 hover:cursor-pointer transition-all duration-300">{t("home")}</p>
          <p 
            onClick={() => navigate(ROUTES.PRODUCT)} 
            className="hover:text-amber-50 hover:cursor-pointer transition-all duration-300">{t("product")}</p>
          <p 
            onClick={() => navigate(ROUTES.MODIFPRODUCT)} 
            className="hover:text-amber-50 hover:cursor-pointer transition-all duration-300">{t("edit")}</p>
        </div>
        <SwitchLanguage />
    </div>
  )
}