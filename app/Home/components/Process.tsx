const steps = [
  {
    title: "Free Consultation",
    description: "Tell us your goals. We recommend the right package and give you a clear price.",
  },
  {
    title: "Plan & Paperwork",
    description: "We collect what we need and map out your filings, product scope, or campaign.",
  },
  {
    title: "Build & Launch",
    description: "We handle the formation, development, or ad setup and keep you updated throughout.",
  },
  {
    title: "Grow With Support",
    description: "After launch, we help you maintain, improve, and scale what we built together.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="rounded-full bg-indigo-100/70 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700">
            How It Works
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            From Idea to Launch in Four Steps
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 font-bold text-white shadow-md shadow-indigo-500/20">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
