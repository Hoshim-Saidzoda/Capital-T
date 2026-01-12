"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

type Job = {
  id: string;
  title: string;
  job: string;
  exp?: string;
  city?: string;
};

export default function VacancyInfoPage() {
  const params = useParams();
  const t = useTranslations("VacancyDetail");
  const [job, setJob] = useState<Job | null>(null);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("https://689efd573fed484cf878a8e9.mockapi.io/thehoshim", {
          cache: "no-store",
        });
        const data: Job[] = await res.json();
        setAllJobs(data);

        const currentJob = data.find(j => j.id === params.id) || null;
        setJob(currentJob);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [params.id]);

  if (loading) return <div className="text-gray-900 dark:text-white">{t("loading")}</div>;
  if (!job) return <div className="text-gray-900 dark:text-white">{t("notFound")}</div>;
  
  const otherJobs = allJobs.filter(j => j.id !== job.id);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto mt-5 p-10 font-sans rounded-xl shadow-2xl bg-white dark:bg-gray-800 dark:shadow-gray-800">
        <h1 className="text-4xl font-bold text-[#1a2b4b] dark:text-white mb-4">{job.title}</h1>
        <p className="text-gray-500 dark:text-gray-300 text-lg mb-2">{job.job}</p>
        {job.exp && (
          <span className="inline-block bg-[#1a2b4b] dark:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm mb-2">
            {job.exp}
          </span>
        )}
        {job.city && (
          <p className="flex items-center text-gray-400 dark:text-gray-400 text-sm mt-2">
            <MapPin size={16} className="mr-1" /> {job.city}
          </p>
        )}
        <div className="mt-6">
          <button className="bg-[#FFA900] text-white px-6 py-3 rounded-2xl font-bold mr-4 hover:bg-[#e69800] transition-colors">
            {t("applyButton")}
          </button>
          <button 
            onClick={() => window.history.back()}
            className="border border-[#FFA900] text-[#FFA900] dark:text-yellow-400 dark:border-yellow-400 px-6 py-3 rounded-2xl font-bold hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
          >
            {t("backButton")}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-[#1a2b4b] dark:text-white">
        <div className="text-center mb-16"></div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-10">
            <section className="ml-10">
              <h3 className="font-bold text-lg mb-4 dark:text-white">{t("aboutCompanyTitle")}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm flex flex-col gap-10 leading-relaxed">
                {t("aboutCompanyText1")}
                <br /> <br /> {t("aboutCompanyText2")}
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("quality1")}</li>
                  <li>{t("quality2")}</li>
                  <li>{t("quality3")}</li>
                  <li>{t("quality4")}</li>
                  <li>{t("quality5")}</li>
                  <li>{t("quality6")}</li>
                  <li>{t("quality7")}</li>
                </ul>
              </p>
            </section>

            <section className="ml-10">
              <h3 className="font-bold text-lg mb-4 dark:text-white">{t("expectationsTitle")}</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-500 dark:text-gray-300 text-sm">
                <li>{t("expectation1")}</li>
                <li>{t("expectation2")}</li>
                <li>{t("expectation3")}</li>
                <li>{t("expectation4")}</li>
              </ul>
            </section>

            <section className="ml-10">
              <h3 className="font-bold text-lg mb-4 dark:text-white">{t("importantTitle")}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm flex flex-col gap-10 leading-relaxed">
                {t("importantText")}
              </p>
            </section>

            <section className="ml-10">
              <h3 className="font-bold text-lg mb-4 dark:text-white">{t("responsibilitiesTitle")}</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-500 dark:text-gray-300 text-sm">
                <li>{t("responsibility1")}</li>
                <li>{t("responsibility2")}</li>
                <li>{t("responsibility3")}</li>
                <li>{t("responsibility4")}</li>
                <li>{t("responsibility5")}</li>
                <li>{t("responsibility6")}</li>
                <li>{t("responsibility7")}</li>
                <li>{t("responsibility8")}</li>
                <li>{t("responsibility9")}</li>
              </ul>
            </section>

            <section className="ml-10">
              <h3 className="font-bold text-lg mb-4 dark:text-white">{t("weOfferTitle")}</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-500 dark:text-gray-300 text-sm">
                <li>{t("offer1")}</li>
                <li>{t("offer2")}</li>
                <li>{t("offer3")}</li>
                <li>{t("offer4")}</li>
                <li>{t("offer5")}</li>
                <li>{t("offer6")}</li>
                <li>{t("offer7")}</li>
                <li>{t("offer8")}</li>
              </ul>
            </section>
          </div>

          <aside className="w-full lg:w-80">
            <div className="sticky top-10 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] p-8 text-center shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4 dark:text-white">{t("interestedTitle")}</h3>
              <p className="text-gray-400 dark:text-gray-300 text-[12px] leading-relaxed mb-8">
                {t("interestedText")}
              </p>
              <button className="w-full bg-[#FFA900] text-white font-bold py-4 rounded-2xl hover:bg-[#e69800] transition-colors shadow-lg shadow-orange-100 dark:shadow-gray-900">
                {t("respondButton")}
              </button>
            </div>
          </aside>
        </div>
      </div>

      <div className="m-10">
        <h2 className="text-2xl text-center font-bold mb-4 dark:text-white">{t("otherVacancies")}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {otherJobs.map(j => (
            <Link
              key={j.id}
              href={`/Vacancies/${j.id}`}
              className="block border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md transition-colors bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#1a2b4b] dark:bg-gray-700 text-white text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">
                  {t("experienceBadge")}
                </span>
                <span className="text-gray-400 dark:text-gray-300 text-xs flex items-center gap-1 font-bold">
                  <MapPin size={14} /> {t("dushanbe")}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#1a2b4b] dark:text-white">{j.title}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">{j.job}</p>
              <div className="mt-6 flex">
                <button className="bg-[#FFA900] text-white px-4 py-3 rounded-2xl font-bold mr-4 hover:bg-[#e69800] transition-colors">
                  {t("detailsButton")}
                </button>
                <button className="border border-[#FFA900] text-[#FFA900] dark:text-yellow-400 dark:border-yellow-400 px-6 py-3 rounded-2xl font-bold hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors">
                  {t("applyNowButton")}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}