import geitfoto from "../assets/belfotos/geitfoto.jpg";
import meergeiten from "../assets/belfotos/meergeiten.jpg";
import lammetjespretbrochure from "../assets/belfotos/lammetjespretbrochure.jpg";
import { NavLink } from "react-router-dom";

const features = [
  { icon: "🐑", title: "Babydiertjes", text: "Knuffel en voer de schattigste lammetjes van dichtbij." },
  { icon: "🌿", title: "Op de boerderij", text: "Een echte hoeve-ervaring midden in de natuur." },
  { icon: "🍦", title: "Met een ijsje", text: "Na het spelen geniet je van een lekker schepijsje van Bel's ijs." },
];

const LammetjespretPage = () => {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-green-50 rounded-b-[60px] px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          {/* Foto */}
          <div className="w-full md:w-1/2 shrink-0">
            <img
              src={geitfoto}
              alt="Lammetjespret"
              className="w-full rounded-3xl object-cover shadow-xl aspect-4/3"
            />
          </div>

          {/* Tekst */}
          <div className="md:w-1/2 text-left">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Beleving op de hoeve</p>
            <h1 className="text-5xl font-bold font-sirenia mb-6 text-gray-800">Lammetjespret</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kom de allerkleinste bewoners van onze hoeve ontmoeten! Tijdens het lammetjesseizoen kan je de pasgeboren lammetjes van dichtbij bewonderen, aaien en zelfs voeren.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Een unieke beleving voor jong en oud — ideaal voor een dagje uit met het gezin, een schooluitstap of een origineel groepsbezoek.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Na het bezoek is er natuurlijk ook een lekker schepijsje van onze eigen hoevemelk!
            </p>

            <NavLink
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold font-sirenia shadow-md hover:bg-green-700 hover:-translate-y-1 transition-all duration-200"
            >
              Plan een bezoek →
            </NavLink>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold font-sirenia text-center mb-12">Wat kan je verwachten?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-200">
              <span className="text-4xl">{f.icon}</span>
              <p className="font-bold text-gray-800 text-lg font-sirenia">{f.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOTO GALERIJ */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold font-sirenia text-center mb-8">Een kijkje op de hoeve</h2>
        <div className="grid grid-cols-2 gap-4">
          <img src={meergeiten} alt="Geiten op de hoeve" className="rounded-2xl object-cover w-full aspect-4/3 shadow" />
          <img src={lammetjespretbrochure} alt="Lammetjespret brochure" className="rounded-2xl object-cover w-full aspect-4/3 shadow" />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-green-600 rounded-3xl max-w-5xl mx-auto px-6 py-14 mb-20 text-center shadow-lg">
        <h2 className="text-3xl font-bold font-sirenia text-white mb-3">Kom op bezoek!</h2>
        <p className="text-green-100 mb-8 max-w-xl mx-auto">
          Wil jij ook de lammetjes komen bewonderen? Neem contact op voor meer info over openingsuren en groepsbezoeken.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-xl font-sirenia hover:bg-green-50 transition-colors shadow"
        >
          Contacteer ons
        </NavLink>
      </section>

    </div>
  );
};

export default LammetjespretPage;
