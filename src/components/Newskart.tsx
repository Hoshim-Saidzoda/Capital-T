import Image from "next/image"
import news1 from "../../public/news1.png"
import news2 from "../../public/news2.png"
import news3 from "../../public/news3.png"
import news5 from "../../public/news5.png"
import news6 from "../../public/news6.png"
import news7 from "../../public/news7.png"
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export default function Newskart() {
    const t = useTranslations("page");
    
    return (
        <section className="font-sans bg-white dark:bg-gray-900 py-5">
            <div className="max-w-8xl mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news1}
                                alt="News 1"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news1Title")}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                {t("news1Description")}
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
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news2}
                                alt="News 2"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news2Title")}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                {t("news2Description")}
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
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-6">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news3}
                                alt="News 3"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news3Title")}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                {t("news3Description")}
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-3">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news5}
                                alt="News 5"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news1Title")}
                            </h3>
                            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed mb-5">
                                {t("news1Description")}
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
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-3">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news6}
                                alt="News 6"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news1Title")}
                            </h3>
                            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed mb-5">
                                {t("news1Description")}
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
                    
                     <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] mb-3">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            <Image 
                                src={news7}
                                alt="News 7"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {t("news1Title")}
                            </h3>
                            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed mb-5">
                                {t("news1Description")}
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
    );
}