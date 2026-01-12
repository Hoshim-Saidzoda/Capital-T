import Image from "next/image";
import { useTranslations } from "next-intl";
import news4 from "../../../../../public/news4.png"
import news1 from "../../../../../public/news1.png"
import news2 from "../../../../../public/news2.png"
import news3 from "../../../../../public/news3.png"
import { Link } from "@/src/i18n/navigation";

export default function NewsId() {
  const t = useTranslations("NewsDetail");

  return (
    <main className="bg-white dark:bg-gray-900 font-sans text-[#1a2b4b] dark:text-white pb-20">
      <div className="max-w-8xl mx-auto px-4 pt-10 mb-12">
        <div className="relative w-full h-[450px] overflow-hidden rounded-[3rem] shadow-sm dark:shadow-gray-800">
          <Image 
            src={news4}
            alt={t("imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight text-[#1a2b4b] dark:text-white">
          {t("heading")}
        </h1>
        <div className="w-20 h-1 bg-[#FFA900] mx-auto mb-6"></div>
        <p className="text-gray-300 dark:text-gray-400 text-xs font-medium uppercase tracking-widest">
          {t("date")}
        </p>
      </div>

      <div className="max-w-8xl ml-10 mr-10 px-4 space-y-12">
        
        <section>
          <h2 className="text-xl font-bold mb-6 text-[#1a2b4b] dark:text-white">{t("aboutTitle")}</h2>
          <div className="space-y-5 text-gray-500 dark:text-gray-300 text-[20px] leading-relaxed">
            <p>{t("aboutParagraph1")}</p>
            <p>{t("aboutParagraph2")}</p>
            <p>{t("aboutParagraph3")}</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#1a2b4b] dark:text-white">{t("valuesTitle")}</h2>
          <p className="text-gray-500 dark:text-gray-300 text-[20px] leading-relaxed">
            {t("valuesText")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#1a2b4b] dark:text-white">{t("goalsTitle")}</h2>
          <ul className="space-y-3">
            {[
              t("goal1"),
              t("goal2"),
              t("goal3")
            ].map((goal, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-500 dark:text-gray-300 text-[20px]">
                <span className="font-bold text-[#1a2b4b] dark:text-white">{index + 1}.</span>
                {goal}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-5 bg-white dark:bg-gray-900 font-sans">
          <div className="max-w-9xl mx-auto px-4">
            
             <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2b4b] dark:text-white mb-4">
                {t("ttitle")}
              </h2>
              <div className="w-16 h-1 bg-[#FFA900] mx-auto"></div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">

               <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <Image 
                    src={news1}
                    alt="News 1"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-bold text-[#1a2b4b] dark:text-white mb-3">
                    Title 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <Link 
                    href="/News/NewsId" 
                    className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-400 font-bold text-sm hover:gap-3 transition-all group"
                  >
                    {t("readMore")}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>

               <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <Image 
                    src={news2}
                    alt="News 2"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-bold text-[#1a2b4b] dark:text-white mb-3">
                    Title 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <Link 
                    href="/News/NewsId" 
                    className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-400 font-bold text-sm hover:gap-3 transition-all group"
                  >
                    {t("readMore")}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>

               <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <Image 
                    src={news3}
                    alt="News 3"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-bold text-[#1a2b4b] dark:text-white mb-3">
                    Title 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <Link 
                    href="/News/NewsId" 
                    className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-400 font-bold text-sm hover:gap-3 transition-all group"
                  >
                    {t("readMore")}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}