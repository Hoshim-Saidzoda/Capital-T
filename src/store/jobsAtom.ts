import { atom } from "jotai";

export type Job = {
  id: string;
  title: string;
  job: string;
  exp?: string;
  city?: string;
};

// Поисковый текст
export const jobSearchAtom = atom("");

// Атом для всех вакансий (GET с MockAPI)
export const jobsDataAtom = atom(async () => {
  const res = await fetch(
    "https://689efd573fed484cf878a8e9.mockapi.io/thehoshim",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Ошибка загрузки данных");
  const data: Job[] = await res.json();
  return data;
});

// Асинхронный атом для фильтрации
export const filteredJobsAtom = atom(async (get) => {
  const search = get(jobSearchAtom).toLowerCase();
  const allJobs = await get(jobsDataAtom); // ✅ await здесь обязателен
  return allJobs.filter(
    (item) =>
      item.job.toLowerCase().includes(search) ||
      item.title.toLowerCase().includes(search)
  );
});
