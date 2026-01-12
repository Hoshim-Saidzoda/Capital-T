"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

const VacanciesSection = () => {
  const t = useTranslations("VacanciesSection");

  return (
    <section className="py-20 bg-white dark:bg-gray-900 font-sans text-[#1a2b4b] dark:text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#FFA900] dark:bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow flex flex-col justify-between bg-white dark:bg-gray-800">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#1a2b4b] dark:bg-gray-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-medium">
                  {t("experience1")}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-[11px] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full border border-gray-300 dark:border-gray-600"></span>
                  {t("city1")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight dark:text-white">
                {t("position1")}
              </h3>
              <p className="text-gray-400 dark:text-gray-300 text-xs leading-relaxed mb-8">
                {t("description1")}
              </p>
            </div>
            <Link 
              href="/Vacancies/1"
              className="text-[#FFA900] dark:text-yellow-500 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group w-fit"
            >
              {t("readMore")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow flex flex-col justify-between bg-white dark:bg-gray-800">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#1a2b4b] dark:bg-gray-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-medium">
                  {t("experience2")}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-[11px] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full border border-gray-300 dark:border-gray-600"></span>
                  {t("city2")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight dark:text-white">
                {t("position2")}
              </h3>
              <p className="text-gray-400 dark:text-gray-300 text-xs leading-relaxed mb-8">
                {t("description2")}
              </p>
            </div>
            <Link 
              href="/Vacancies/2"
              className="text-[#FFA900] dark:text-yellow-500 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group w-fit"
            >
              {t("readMore")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow flex flex-col justify-between bg-white dark:bg-gray-800">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#1a2b4b] dark:bg-gray-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-medium">
                  {t("experience3")}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-[11px] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full border border-gray-300 dark:border-gray-600"></span>
                  {t("city3")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight dark:text-white">
                {t("position3")}
              </h3>
              <p className="text-gray-400 dark:text-gray-300 text-xs leading-relaxed mb-8">
                {t("description3")}
              </p>
            </div>
            <Link 
              href="/Vacancies/3"
              className="text-[#FFA900] dark:text-yellow-500 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group w-fit"
            >
              {t("readMore")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>

        </div>

        <div className="flex justify-center">
          <Link 
            href="/Vacancies"
            className="bg-[#FFA900] dark:bg-yellow-500 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#f0a000] dark:hover:bg-yellow-600 transition-colors shadow-lg shadow-orange-100 dark:shadow-yellow-500/20"
          >
            {t("allVacancies")}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VacanciesSection;