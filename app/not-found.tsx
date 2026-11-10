import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-linear-to-br from-blue-50 via-white to-indigo-50 px-6 pb-16 pt-28 text-center">
      <p className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">This page could not be found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The link may be out of date. Head back home or tell us what you were looking for.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-7 py-3 font-semibold text-white shadow-md"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 hover:bg-slate-50"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
