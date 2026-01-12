import HeroSlider from "@/src/components/HeroSlider";
import Image from "next/image";
 import Onas1 from "../../../../public/Onas1.png"
 import Onas2 from "../../../../public/Onas2.png"
 import Onas3 from "../../../../public/Onas3.png"
 import map from "../../../../public/map.png"
 import map2 from "../../../../public/map2.png"
 import krembel from "../../../../public/krembel.png"
 import krembe2 from "../../../../public/krembel2.png"
 import krembe3 from "../../../../public/krembel3.png"
 import krembe4 from "../../../../public/krembel4.png"
 import krembe5 from "../../../../public/krembel5.png"
 import news1 from "../../../../public/news1.png"
 import news2 from "../../../../public/news2.png"
 import news3 from "../../../../public/news3.png"
 
 import { useTranslations } from "next-intl";
import { Truck, Users } from "lucide-react";
import { Warehouse,  FileCheck   } from 'lucide-react';
 import   { MapPin, TrendingUp, Settings } from "lucide-react";
import VacanciesSection from "@/src/components/VacanciesSection ";
import PartnerFormSection from "@/src/components/PartnerFormSection";
const page = () => {
  const t = useTranslations("page");
  return <div className=""> 
 <div><HeroSlider /></div>

<section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 space-y-12">
         <div className="text-center md:text-left space-y-2">
          <h2 className="text-6xl text-center font-bold text-[#1a2b4b] dark:text-white">{t("title")}</h2>
          <h1 className="text-center text-3xl text-[#FFA900] dark:text-yellow-500">_____</h1>
          <p className="font-bold mt-8 text-center text-3xl text-gray-800 dark:text-gray-200">
            {t("description")}
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
           <div className="space-y-6">
            <h1 className="text-2xl text-[#FFA900] dark:text-yellow-500 font-bold">{t("valuesTitle")}</h1>
            <p className="font-bold border p-7 rounded-3xl border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300   dark:bg-gray-800">
              {t("valuesText")}
            </p>

            <h1 className="text-2xl text-[#FFA900] dark:text-yellow-500 font-bold">{t("goalsTitle")}</h1>
            <ul className="font-bold border-2 p-7 rounded-3xl border-gray-300 dark:border-gray-700 space-y-4 bg-white dark:bg-gray-800">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-6 h-6 text-[#FFA900] dark:text-yellow-500" />
                <span>{t("goal1")}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <TrendingUp className="w-6 h-6 text-[#FFA900] dark:text-yellow-500" />
                <span>{t("goal2")}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Settings className="w-6 h-6 text-[#FFA900] dark:text-yellow-500" />
                <span>{t("goal3")}</span>
              </li>
            </ul>
            <p className="text-xl text-gray-800 dark:text-gray-300">
              {t("conclusion")}
            </p>
          </div>

           <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="col-span-3 row-span-1">
              <div className="relative w-full h-[280px] overflow-hidden rounded-3xl shadow-lg dark:shadow-gray-800 group">
  <Image
    src={Onas1}
    alt={t("photo1Alt")}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
</div>
            </div>

            <div className="col-span-2">
             <div className="relative w-full h-[280px] overflow-hidden rounded-3xl shadow-lg dark:shadow-gray-800 group">
  <Image
    src={Onas2}
    alt={t("photo1Alt")}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
</div>
            </div>
            <div className="col-span-1">
              <div className="relative w-full h-[280px] overflow-hidden rounded-3xl shadow-lg dark:shadow-gray-800 group">
  <Image
    src={Onas3}
    alt={t("photo1Alt")}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>



   <section className="py-20  ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

           <div className="lg:col-span-2 grid grid-cols-1  gap-6">

             <div className="relative rounded-2xl border-2   p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/map.png')] bg-center bg-no-repeat bg-[length:100%] pointer-events-none"></div>
              <div className="relative z-10 flex items-start  gap-4">
                <div className="w-12 h-12 rounded-full   shadow flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t("years")}</h3>
                  <p className="text-gray-600 text-xl mt-1">
                    {t("yearsDescription")}
                  </p>
                </div>
              </div>
            </div>

             <div className="grid grid-cols-2  gap-6">
              <div className="relative rounded-2xl border-2   p-6 overflow-hidden">
                <div className="w-12 h-12 rounded-2xl mb-5   shadow flex items-center justify-center">
                  <Users />
                </div>
                <div className="absolute inset-0 bg-[url('/map.png')] bg-center bg-no-repeat bg-[length:100%] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold">{t("employeesCount")}</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("employeesDescription")}
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl border-2  p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/map.png')] bg-center bg-no-repeat bg-[length:200%] pointer-events-none"></div>
                <div className="w-12 h-12 rounded-2xl mb-5   shadow flex items-center justify-center">
                  <Truck />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold">{t("deliveryVolume")}</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("deliveryDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

           <div className="lg:col-span-3 relative overflow-hidden rounded-2xl border-2   p-8">
            <div className="absolute inset-0 bg-[url('/map.png')] bg-center bg-no-repeat bg-[length:95%] pointer-events-none"></div>

            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6 text-center">
                {t("mainOfficesTitle")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="  backdrop-blur-sm rounded-xl p-5 shadow-sm border border-amber-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bleck-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t("dushanbe")}</h4>
                      <p className="text-gray-600 mt-1">{t("dushanbePhone")}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {t("dushanbeAddress")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-sm rounded-xl p-5 shadow-sm border border-amber-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bleck" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t("khujand")}</h4>
                      <p className="text-gray-600 mt-1">{t("khujandPhone")}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {t("khujandAddress")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Филиалы */}
              <div className="text-center">
                <h4 className="font-semibold mb-6 text-lg">
                  {t("branchesTitle")}
                </h4>

                <div className="flex flex-wrap justify-center gap-3">
                  {t("branchCities").split(",").map(city => (
                    <span
                      key={city.trim()}
                      className=" backdrop-blur-sm px-4 py-3 rounded-xl text-sm shadow-sm border border-amber-100 hover:bg-white transition-colors"
                    >
                      {city.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  

<section className="py-8 md:py-16 px-4 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    
     <div className="mb-8 md:mb-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
        {t("titlee")}
      </h2>
      <div className="text-center text-3xl md:text-4xl text-[#FFA900] dark:text-yellow-500">____</div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      
       <div className="w-full md:w-1/2 space-y-12 md:space-y-20 md:ml-24">
        
         <div className="relative pb-12 md:pb-0">
          <p className="text-gray-400 dark:text-gray-500 font-bold text-3xl md:text-6xl mb-3 md:mb-6 tracking-wider md:tracking-widest">
            {t("sogd")}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">2170</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("akb")}
              </span>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-gray-200 dark:bg-gray-700 self-center"></div>
            <div className="md:hidden w-16 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">2110</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("okb")}
              </span>
            </div>
          </div>
          <div className="w-16 h-[2px] bg-[#FFA900] dark:bg-yellow-500 mt-4 opacity-60"></div>
        </div>

         <div className="relative pb-12 md:pb-0">
          <p className="text-gray-400 dark:text-gray-500 font-bold text-2xl md:text-5xl mb-3 md:mb-6 tracking-wider md:tracking-widest uppercase">
            {t("rppAndKhatlon")}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">5860</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("akb")}
              </span>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-gray-200 dark:bg-gray-700 self-center"></div>
            <div className="md:hidden w-16 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">6700</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("okb")}
              </span>
            </div>
          </div>
          <div className="w-16 h-[2px] bg-[#FFA900] dark:bg-yellow-500 mt-4 opacity-60"></div>
        </div>

         <div className="relative">
          <p className="text-gray-400 dark:text-gray-500 font-bold text-3xl md:text-6xl mb-3 md:mb-6 tracking-wider md:tracking-widest">
            {t("gbao")}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">220</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("akb")}
              </span>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-gray-200 dark:bg-gray-700 self-center"></div>
            <div className="md:hidden w-16 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">360</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                {t("okb")}
              </span>
            </div>
          </div>
        </div>
      </div>

       <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative    md:rounded-2xl p-4   dark:shadow-gray-800/30">
          <Image
            src={map2}
            alt={t("mapAlt")}
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
</section>




 <section className="py-16 bg-white dark:bg-gray-900 font-sans">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] dark:text-white mb-4">
        {t("titleee")}
      </h2>
      <div className="w-16 h-1 bg-[#FFA900] dark:bg-yellow-500 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
      
      <div className="md:col-span-5 border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center transition-all hover:shadow-lg dark:hover:shadow-gray-800/50 group">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Warehouse size={28} className="md:w-8 md:h-8 text-[#FFA900] dark:text-yellow-500" />
        </div>
        <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
          {t("warehouseArea")}
        </div>
        <div className="text-[10px] md:text-[11px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.15em] mt-2 md:mt-3">
          {t("warehouseLabel")}
        </div>
      </div>

      <div className="md:col-span-7 border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center transition-all hover:shadow-lg dark:hover:shadow-gray-800/50 group">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Truck size={28} className="md:w-8 md:h-8 text-[#FFA900] dark:text-yellow-500" />
        </div>
        <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
          {t("fleetCount")}
        </div>
        <div className="text-[10px] md:text-[11px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.15em] mt-2 md:mt-3">
          {t("fleetLabel")}
        </div>
      </div>

      <div className="md:col-span-4 border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-6 md:p-8 flex gap-6 md:gap-10 items-center justify-center transition-all hover:shadow-lg dark:hover:shadow-gray-800/50 group h-auto md:h-38">
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            {t("clientsCount")}
          </div>
          <div className="text-[9px] md:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.12em] mt-1 md:mt-2">
            {t("clientsLabel")}
          </div>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Users size={24} className="md:w-7 md:h-7 text-[#FFA900] dark:text-yellow-500" />
        </div>
      </div>

      <div className="md:col-span-4 border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-6 md:p-8 flex gap-6 md:gap-10 items-center justify-center transition-all hover:shadow-lg dark:hover:shadow-gray-800/50 group h-auto md:h-38">
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            {t("contractsCount")}
          </div>
          <div className="text-[9px] md:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.12em] mt-1 md:mt-2">
            {t("contractsLabel")}
          </div>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FileCheck size={24} className="md:w-7 md:h-7 text-[#FFA900] dark:text-yellow-500" />
        </div>
      </div>

      <div className="md:col-span-4 border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-6 md:p-8 flex gap-6 md:gap-10 items-center justify-center transition-all hover:shadow-lg dark:hover:shadow-gray-800/50 group h-auto md:h-38">
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            {t("citiesCount")}
          </div>
          <div className="text-[9px] md:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.12em] mt-1 md:mt-2">
            {t("citiesLabel")}
          </div>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <MapPin size={24} className="md:w-7 md:h-7 text-[#FFA900] dark:text-yellow-500" />
        </div>
      </div>

    </div>
  </div>
</section>



<section className="py-20 bg-[#111827] dark:bg-gray-900 rounded-[2.5rem] mx-4 my-10 font-sans text-center">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      {t("partnersTitle")}
    </h2>
    <div className="w-16 h-1 bg-[#FFA900] dark:bg-yellow-500 mx-auto mb-10"></div>

    <p className="text-gray-400 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
      {t("partnersDescription")}
    </p>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center">
      
      <div className="bg-[#D3301D] dark:bg-red-700 h-24 md:h-28 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-red-900/30">
        <Image 
          src={krembel} 
          alt="Krember" 
          width={100} 
          height={100}
          className="max-w-[80px] md:max-w-[100px]"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 h-24 md:h-28 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-800/50">
        <Image 
          src={krembe2} 
          alt="Krember" 
          width={100} 
          height={100}
          className="max-w-[80px] md:max-w-[100px]"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 h-24 md:h-28 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-800/50">
        <Image 
          src={krembe3} 
          alt="Krember" 
          width={100} 
          height={100}
          className="max-w-[80px] md:max-w-[100px]"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 h-24 md:h-28 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-800/50">
        <Image 
          src={krembe4} 
          alt="Krember" 
          width={100} 
          height={100}
          className="max-w-[80px] md:max-w-[100px]"
        />
      </div>

      <div className="bg-[#1D4A7A] dark:bg-blue-900 h-24 md:h-28 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-900/30">
        <Image 
          src={krembe5} 
          alt="Krember" 
          width={100} 
          height={100}
          className="max-w-[80px] md:max-w-[100px]"
        />
      </div>

    </div>
  </div>
</section>


<section className="py-20 bg-white dark:bg-gray-900 font-sans">
  <div className="max-w-8xl mx-auto px-4">
    
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1a2b4b] dark:text-white mb-4">
        {t("title")}
      </h2>
      <div className="w-16 h-1 bg-[#FFA900] dark:bg-yellow-500 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

      <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow bg-white dark:bg-gray-800">
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
            {t("news1Title")}
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {t("news1Description")}
          </p>
          <button className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-500 font-bold text-sm hover:gap-3 transition-all group">
            {t("readMore")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow bg-white dark:bg-gray-800">
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
            {t("news2Title")}
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {t("news2Description")}
          </p>
          <button className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-500 font-bold text-sm hover:gap-3 transition-all group">
            {t("readMore")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-gray-100 dark:border-gray-800 p-2 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow bg-white dark:bg-gray-800">
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
            {t("news3Title")}
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {t("news3Description")}
          </p>
          <button className="flex items-center gap-2 text-[#FFA900] dark:text-yellow-500 font-bold text-sm hover:gap-3 transition-all group">
            {t("readMore")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

    </div>

    <div className="flex justify-center">
      <button className="bg-[#FFA900] dark:bg-yellow-500 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#e69800] dark:hover:bg-yellow-600 transition-colors shadow-lg shadow-orange-200 dark:shadow-yellow-500/20">
        {t("allNews")}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

  </div>
</section>

 <VacanciesSection />

  <section id="partnership-section" className="py-16">
  <PartnerFormSection />
</section>

   </div>;
};

export default page;
