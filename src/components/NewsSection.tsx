"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import news4 from "../../public/news4.png";
import { Link } from "@/src/i18n/navigation";

export default function NewsSection() {
  const t = useTranslations("NewsSection2");
 
  return (
    <section className="py-16 font-sans bg-white dark:bg-gray-900">
      <div className="max-w-8xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#FFA900] mx-auto"></div>
        </div>

        <div className="border border-gray-100 dark:border-gray-700 rounded-[3rem] p-4 md:p-6 flex flex-col lg:flex-row items-stretch gap-8 shadow-sm bg-white dark:bg-gray-800">
          
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                {t("heading")}
              </h3>
              
              <div className="space-y-6 text-gray-500 dark:text-gray-300 text-[14px] leading-relaxed">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </div>

            <Link
              href="/News/NewsId"
              className="mt-10 flex items-center gap-2 text-[#FFA900] dark:text-yellow-400 font-bold text-sm hover:translate-x-1 transition-transform w-fit group"
            >
              {t("readMore")}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[400px]">
  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden">
    <Image 
      src={news4}
      alt={t("imageAlt")}
      className="w-full h-full object-cover dark:opacity-90"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}