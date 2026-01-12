"use client";

import { useAtom, useAtomValue } from "jotai";
import { jobSearchAtom, filteredJobsAtom } from "@/src/store/jobsAtom";
import { Search, MapPin } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Vacancies() {
  const t = useTranslations("VacanciesPage");
  const [search, setSearch] = useAtom(jobSearchAtom);
  const filteredJobs = useAtomValue(filteredJobsAtom);

  const regions = [
    { name: t("region1"), count: 8, checked: true },
    { name: t("region2"), count: 14, checked: false },
    { name: t("region3"), count: 2, checked: false },
    { name: t("region4"), count: 1, checked: false },
    { name: t("region5"), count: null, checked: false },
    { name: t("region6"), count: 3, checked: false },
    { name: t("region7"), count: null, checked: false },
    { name: t("region8"), count: null, checked: false },
    { name: t("region9"), count: null, checked: false },
  ];

  const categories = [
    { name: t("category1"), count: 8 },
    { name: t("category2"), count: 14 },
    { name: t("category3"), count: 2 },
    { name: t("category4"), count: 1 },
    { name: t("category5"), count: null },
    { name: t("category6"), count: 3 },
    { name: t("category7"), count: null },
    { name: t("category8"), count: null },
    { name: t("category9"), count: null },
    { name: t("category10"), count: null },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-900 min-h-screen">
      
       <aside className="w-full md:w-64 space-y-10">
         <div>
          <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">
            {t("regionsTitle")}
          </h3>
          <div className="space-y-4 border-2 border-gray-100 dark:border-gray-700 p-4 rounded-2xl bg-white dark:bg-gray-800">
            {regions.map((reg, i) => (
              <label key={i} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    reg.checked 
                      ? 'bg-[#FFA900] border-[#FFA900] dark:bg-yellow-500 dark:border-yellow-500' 
                      : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}>
                    {reg.checked && <div className="w-2 h-2 bg-white dark:bg-gray-900 rounded-full"></div>}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                    {reg.name}
                  </span>
                </div>
                {reg.count && <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">{reg.count}</span>}
              </label>
            ))}
          </div>
        </div>

         <div>
          <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">
            {t("categoriesTitle")}
          </h3>
          <div className="space-y-4 border-2 border-gray-100 dark:border-gray-700 p-4 rounded-2xl bg-white dark:bg-gray-800">
            {categories.map((cat, i) => (
              <label key={i} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                    {cat.name}
                  </span>
                </div>
                {cat.count && <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">{cat.count}</span>}
              </label>
            ))}
          </div>
        </div>
      </aside>

       <main className="flex-1">
        <h1 className="text-4xl font-black text-[#1a2b4b] dark:text-white mb-10">
          {t("pageTitle")}
        </h1>
        
         <div className="flex gap-3 mb-10">
          <div className="flex-1 relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full border-2 border-gray-100 dark:border-gray-700 rounded-2xl py-4 px-6 outline-none text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <button className="bg-[#FFA900] text-white p-4 rounded-2xl shadow-lg shadow-orange-100 dark:shadow-gray-900 hover:bg-[#e69800] transition-colors">
            <Search size={24} />
          </button>
        </div>

         {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div 
                key={job.id} 
                className="border border-gray-100 dark:border-gray-700 rounded-[2rem] p-8 transition-all hover:shadow-md dark:hover:shadow-gray-800 bg-white dark:bg-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#1a2b4b] dark:bg-gray-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">
                    {t("experienceBadge")}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-xs flex items-center gap-1 font-bold">
                    <MapPin size={14} /> {t("dushanbe")}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#1a2b4b] dark:text-white mb-3">{job.title}</h2>
                <p className="text-gray-400 dark:text-gray-300 text-xs leading-relaxed mb-8 max-w-2xl">
                  {job.job}
                </p>

                <div className="flex gap-4">
                  <Link
                    href={`/Vacancies/${job.id}`}
                    className="bg-[#FFA900] text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-[#e69800] transition-colors inline-block text-center"
                  >
                    {t("detailsButton")}
                  </Link>
                  <button className="border border-[#FFA900] text-[#FFA900] dark:text-yellow-400 dark:border-yellow-400 px-8 py-3 rounded-2xl text-sm font-bold hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors">
                    {t("applyButton")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 relative">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-gray-200 dark:text-gray-700">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16.5 16.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 9H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold text-[#1a2b4b] dark:text-white mb-2">
               "Ничего не найдено" 
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs">
               "К сожалению, у нас пока нет подходящих вакансий по вашему запросу." 
            </p>
          </div>
        )}
      </main>
    </div>
  );
}