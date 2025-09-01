import { useTranslation } from "react-i18next";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  sortAsc: boolean;
  setSortAsc: (v: boolean) => void;
}

export function FilterBar({ search, setSearch, category, setCategory, sortAsc, setSortAsc}: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-4 w-full gap-4">
      <div className="flex w-[60%]">
        <input
          type="text"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 pl-2 border-1 border-b-0 md:border-b-1 border-r-1 md:border-r-0 border-black/50 rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-[85%] text-black placeholder:text-sm placeholder:text-black/50 hover:bg-gray-300 transition-all duration-300"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 border-1 border-black/50 py-1 px-2 rounded-b-xl md:rounded-bl-none md:rounded-r-xl text-black hover:bg-grey-300 transition-all duration-300"
        >
          <option value="all">{t("allCategory")}</option>
          <option value="Home">{t("categoryHome")}</option>
          <option value="Tech">{t("categoryTech")}</option>
          <option value="Stationery">{t("categoryStationery")}</option>
        </select>
      </div>

      <button
        onClick={() => setSortAsc(!sortAsc)}
        className="w-fit py-1 px-3 text-black rounded bg-gray-100 hover:bg-gray-300 transition-all duration-300"
      >
        {t("sortBy")} {sortAsc ? t("asc") + " ↑" : t("desc") + " ↓"}
      </button>
    </div>
  );
}
