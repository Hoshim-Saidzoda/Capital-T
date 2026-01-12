'use client'

import "./../app/[locale]/globals.css"; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Генерация анимированных частиц как в вашем коде
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a2b4b] flex items-center justify-center overflow-hidden relative font-sans">
      
      {/* Анимированные частицы из вашего макета */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#FFA900]/40 to-yellow-500/20 shadow-lg shadow-orange-500/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8 relative inline-block">
          <h1 className="text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#FFA900] text-[#1a2b4b] text-sm md:text-base font-bold px-6 py-2 rounded-full transform -rotate-12 shadow-xl">
              Страница не найдена
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Упс!  
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
          Страница, которую вы ищете, была перемещена, удалена или никогда не существовала. 
         </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/Vacancies"
            className="flex items-center gap-2 bg-[#FFA900] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#e69800] transition-all hover:scale-105 shadow-lg shadow-orange-500/20"
          >
 Вакансии 
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-[#FFA900] text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all"
          >
            <ArrowLeft size={20} />
            Назад
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          100% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}