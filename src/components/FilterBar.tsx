import { useTranslation } from "react-i18next";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  sortAsc: boolean;
  setSortAsc: (v: boolean) => void;
}

const CATEGORIES = ["all", "Home", "Tech", "Stationery"];

export function FilterBar({ search, setSearch, category, setCategory, sortAsc, setSortAsc }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-4 w-full gap-4">
      <div className="flex flex-col md:flex-row w-[60%]">
        <label htmlFor="search-input" className="sr-only">
          {t("search")}
        </label>
        <input
          id="search-input"
          type="text"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 pl-2 border border-black/50 rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-[85%] text-black placeholder:text-sm placeholder:text-black/50 hover:bg-gray-200 transition-all duration-300"
        />

        <label htmlFor="category-select" className="sr-only">
          {t("category")}
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 border border-black/50 py-1 px-2 rounded-b-xl md:rounded-bl-none md:rounded-r-xl text-black hover:bg-gray-200 transition-all duration-300"
        >
          {CATEGORIES.map((c: string) => (
            <option key={c} value={c}>
              {t(c === "all" ? "allCategory" : `category${c}`)}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => setSortAsc(!sortAsc)}
        aria-pressed={sortAsc}
        aria-label={t("sortBy") + " " + (sortAsc ? t("asc") : t("desc"))}
        className="w-fit py-1 px-3 text-black rounded bg-gray-200 hover:bg-gray-300 transition-all duration-300"
      >
        {t("sortBy")} {sortAsc ? t("asc") + " ↑" : t("desc") + " ↓"}
      </button>

      <div aria-live="polite" className="sr-only">
        {t("sortBy")} {sortAsc ? t("asc") : t("desc")}
      </div>
    </div>
  );
}
