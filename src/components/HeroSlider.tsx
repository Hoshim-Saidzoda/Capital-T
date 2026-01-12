"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
 import Link from 'next/link';

import image1 from "../../public/imge1.png";
import image2 from "../../public/imge2.png";
import image3 from "../../public/imge3.png";
 const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const t = useTranslations("HeroSlider");

   const slides = [
    {
      id: 1,
      image: image1,
      title: t("title"),
      subtitle: t("subtitle1"),
    },
    {
      id: 2,
      image: image2,
      title: t("title"),
      subtitle: t("subtitle2"),
    },
    {
      id: 3,
      image: image3,
      title: t("title"),
      subtitle: t("subtitle3"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-180 overflow-hidden dark:bg-gray-900">
      
       <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
             <div className="absolute inset-0 z-10 dark:bg-black/40" />
            
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={`Слайд ${slide.id}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="dark:opacity-90"
              />
            </div>
            
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white dark:text-gray-100 mb-1 flex flex-col">
                    {slide.title}
                    <span className="text-[#FFA900] dark:text-yellow-500 text-5xl mb-5">_____</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 dark:text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 justify-center">
            <Link 
  href="#partnership-section"
  className="px-8 py-4 bg-[#FFA900] dark:bg-yellow-500 text-white font-bold rounded-4xl hover:bg-orange-600 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25 dark:shadow-yellow-500/25 inline-block"
>
  {t("becomePartner")}
</Link>
                    <button className="px-8 py-4 bg-transparent border-2 border-[#FFA900] dark:border-yellow-500 text-[#FFA900] dark:text-yellow-500 font-bold rounded-lg hover:bg-orange-500/10 dark:hover:bg-yellow-500/10 transition-all">
                      {t("contactUs")}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-7 max-w-2xl mx-auto">
                    <div className="rounded-xl md:pt-3 border border-gray-300/20 dark:border-gray-700 transition-all p-4 bg-black/20 dark:bg-gray-900/40 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2 md:mb-3 justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100">
                          {t("totalClients")}
                        </span>
                        <p className="text-gray-400 dark:text-gray-300 text-sm md:text-base text-left">
                          {t("totalClientsLabel")} <br /> {t("includingHoreca")}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl md:pt-3 border border-gray-300/20 dark:border-gray-700 transition-all p-4 bg-black/20 dark:bg-gray-900/40 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2 md:mb-3 justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100">
                          {t("activeClients")}
                        </span>
                        <p className="text-gray-400 dark:text-gray-300 text-sm md:text-base text-left">
                          {t("activeClientsLabel")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

       <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-800 dark:border-gray-700 hover:bg-orange-500 dark:hover:bg-yellow-600 hover:border-orange-500 dark:hover:border-yellow-600 transition-all"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-800 dark:border-gray-700 hover:bg-orange-500 dark:hover:bg-yellow-600 hover:border-orange-500 dark:hover:border-yellow-600 transition-all"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-orange-500 dark:bg-yellow-500 w-8"
                : "bg-gray-700 dark:bg-gray-600 hover:bg-orange-500/50 dark:hover:bg-yellow-500/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

       <div className="absolute bottom-8 right-4 md:right-8 z-30">
        <div className="text-gray-500 dark:text-gray-400 font-mono text-sm">
          <span className="text-orange-500 dark:text-yellow-500 text-xl font-bold">{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>{slides.length}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;