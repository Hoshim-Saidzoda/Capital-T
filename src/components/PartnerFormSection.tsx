"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Upload, Mail, Phone } from "lucide-react";
import map3 from "../../public/map3.png";

const PartnershipSection = () => {
  const t = useTranslations("PartnershipSection");

  return (
    <section className="py-16 bg-white dark:bg-gray-900 rounded-[2.5rem] mx-4 my-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black text-[#1a2b4b] dark:text-white mb-5 flex items-center gap-4">
              <span className="text-gray-300 dark:text-gray-600 text-3xl font-light"></span> 
              {t("title")}
            </h2>

            <form className="space-y-4 flex flex-col gap-3">
              <input 
                type="text" 
                placeholder={t("namePlaceholder")}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold focus:ring-2 focus:ring-[#FFA900] dark:focus:ring-yellow-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
              />
              <input 
                type="text" 
                placeholder={t("companyPlaceholder")}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold focus:ring-2 focus:ring-[#FFA900] dark:focus:ring-yellow-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
              />
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder={t("emailPlaceholder")}
                  className="w-full md:w-1/2 px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold focus:ring-2 focus:ring-[#FFA900] dark:focus:ring-yellow-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                />
                <input 
                  type="tel" 
                  placeholder={t("phonePlaceholder")}
                  className="w-full md:w-1/2 px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold focus:ring-2 focus:ring-[#FFA900] dark:focus:ring-yellow-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="relative group cursor-pointer">
                <div className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center gap-4 transition-all group-hover:border-[#FFA900] dark:group-hover:border-yellow-500">
                  <div className="bg-[#FFA900] dark:bg-yellow-500 p-2 rounded-lg">
                    <Upload size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {t("uploadLabel")}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase">
                      {t("uploadSize")}
                    </p>
                  </div>
                </div>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <button className="w-full bg-[#1a2b4b] dark:bg-gray-800 text-white font-bold py-4 rounded-2xl hover:bg-[#25395f] dark:hover:bg-gray-700 transition-colors mt-4 border border-gray-300 dark:border-gray-700">
                {t("submitButton")}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 mt-15 space-y-6">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden shadow-sm dark:shadow-gray-800">
              <Image 
                src={map3} 
                alt={t("mapAlt")}
                className="w-full h-100 -mt-3 object-cover dark:opacity-90"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#FFA900] dark:bg-yellow-500 p-2 rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                  <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="bg-gray-50 dark:bg-gray-800 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700 rounded-2xl py-5 px-6 flex items-center justify-center gap-3 hover:border-[#FFA900] dark:hover:border-yellow-500 transition-colors">
                <Mail size={18} className="text-[#FFA900] dark:text-yellow-500" />
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {t("emailContact")}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700 rounded-2xl py-5 px-6 flex items-center justify-center gap-3 hover:border-[#FFA900] dark:hover:border-yellow-500 transition-colors">
                <Phone size={18} className="text-[#FFA900] dark:text-yellow-500" />
                <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                  {t("phoneContact")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;