import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main className="bg-slate-50 px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 text-slate-700 shadow-sm sm:p-12 [&_a]:font-medium [&_a]:text-indigo-700 [&_a]:underline [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mb-6 mt-2 text-sm text-slate-500">Last updated: {updated}</p>
        {children}
      </article>
    </main>
  );
}
