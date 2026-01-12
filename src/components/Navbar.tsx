"use client";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

import Image from "next/image";
import logo from "../../public/logo.png";
import { Link, usePathname } from "../i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/" },
    { href: "/about", label: t("about") },
    { href: "/coverage", label: t("coverage") },
    { href: "/infrastructure", label: t("infrastructure") },
    { href: "/partners", label: t("partners") },
    { href: "/News", label: t("news") },
    { href: "/Vacancies", label: t("vacancies") },
    { href: "/PartnershipSection",  },
    
  ];

  const languages = [
    { code: "ru", label: "Русский", short: "RU" },
    { code: "en", label: "English", short: "EN" },
  ];

   const currentLanguage = languages.find(lang => lang.code === locale);

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50   backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
           <Link href="/" className="relative h-10 w-32">
            <Image
              src={logo}
              alt={"Company Logo"}
              fill
              className="object-contain"
              priority
            />
          </Link>

           <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${pathname === link.href 
                    ? "text-blue-600 bg-blue-50" 
                    : "  hover:text-blue-600 hover:bg-gray-50"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

           <div className="flex items-center gap-4">
             <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg 
                  transition-all duration-200 hover:bg-gray-100
                  ${isLanguageDropdownOpen ? "bg-gray-100" : ""}
                `}
                aria-label="Select language"
              >
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage?.short}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
              </button>

               {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname}
                      locale={lang.code}
                      className={`
                        flex items-center px-4 py-3 text-sm transition-colors
                        ${locale === lang.code
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                      onClick={() => {
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      <span className="mr-3">
                        {lang.code === "ru" ? "🇷🇺" : "🇺🇸"}
                      </span>
                      <span>{lang.label}</span>
                      {locale === lang.code && (
                        <span className="ml-auto text-blue-600">
                          ✓
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
              <AnimatedThemeToggler />
          </div>
        </div>

         {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block px-4 py-3 rounded-lg transition-colors
                    ${pathname === link.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
             <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3 px-4">Выбор языка / Language</p>
              <div className="space-y-2 px-4">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={pathname}
                    locale={lang.code}
                    className={`
                      flex items-center justify-between py-3 px-4 rounded-lg transition-colors
                      ${locale === lang.code
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3">
                        {lang.code === "ru" ? "🇷🇺" : "🇺🇸"}
                      </span>
                      <span className="font-medium">{lang.label}</span>
                    </div>
                    {locale === lang.code && (
                      <span className="text-white">✓</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;