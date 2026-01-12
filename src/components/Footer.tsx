"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
 import logoImage from "../../public/logo.png"

export default function PartnersAndFooter() {
  const t = useTranslations('footer');
 
  
  const telegramLink = "https://t.me/kapital_t_company";
  const whatsappLink = "https://wa.me/992006444919";

  
   
 
  const menuItems = [
    { key: 'about', href: '/about' },
    { key: 'coverage', href: '/coverage' },
    { key: 'infrastructure', href: '/infrastructure' },
    { key: 'partners', href: '/partners' },
    { key: 'news', href: '/news' },
    { key: 'vacancies', href: '/vacancies' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 font-sans">
      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-100 dark:border-gray-800 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Логотип */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <Image 
                src={logoImage} 
                alt={t('logoAlt')}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-black text-[#1a2b4b] dark:text-white uppercase tracking-tighter">
              {t('companyName')}
            </span>
          </div>

          {/* Навигация */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.key} 
                href={item.href} 
                className="text-sm font-bold text-[#1a2b4b] dark:text-gray-300 hover:text-[#FFA900] dark:hover:text-yellow-500 transition-colors"
              >
                {t(`menu.${item.key}`)}
              </Link>
            ))}
            
            
          </nav>

          {/* Социальные сети */}
          <div className="flex gap-4">
            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#24A1DE] flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
              aria-label={t('telegram')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.98-.65-.34-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.24-.02-.1.02-1.74 1.11-4.92 3.26-.46.32-.88.48-1.25.47-.41-.01-1.2-.23-1.79-.42-.72-.23-1.29-.36-1.24-.76.03-.23.27-.46.75-.66 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.36-1.36 3.74-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .39z"/>
              </svg>
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
              aria-label={t('whatsapp')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.24 0 4.35.87 5.93 2.44a8.305 8.305 0 012.44 5.93c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.14l-.3-.17-3.12.82.83-3.04-.2-.32a8.132 8.132 0 01-1.26-4.38c0-2.24.87-4.35 2.44-5.93a8.305 8.305 0 015.93-2.44z"/>
                <path d="M17.2 14.38c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.24-.14-.56-.25z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-50 dark:border-gray-800">
          <p className="text-gray-300 dark:text-gray-500 text-[11px] font-medium uppercase tracking-widest">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}