import { NavLink } from "react-router-dom";
import isaijs from "../assets/belfotos/isaijs.jpg";

const features = [
  { icon: "🕐", title: "24/7 beschikbaar", text: "Dag en nacht vers ijs, ook buiten de openingsuren." },
  { icon: "🍦", title: "Verse smaken", text: "Rechtstreeks van de hoeve, ambachtelijk bereid." },
  { icon: "📍", title: "Ter plaatse", text: "Altijd dichtbij, altijd klaar om te genieten." },
];

const IjsautomatenPage = () => {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-blue-50 rounded-b-[60px] px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          {/* Foto */}
          <div className="w-full md:w-1/2 shrink-0">
            <img
              src={isaijs}
              alt="Ijsautomaat"
              className="w-full rounded-3xl object-cover shadow-xl aspect-4/3"
            />
          </div>

          {/* Tekst */}
          <div className="md:w-1/2 text-left">
            <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Nieuw bij Bel's ijs</p>
            <h1 className="text-5xl font-bold font-sirenia mb-6 text-gray-800">Ijsautomaat</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Onze gloednieuwe ijsautomaat staat dag en nacht klaar voor jou! Geniet van vers hoeveijs wanneer jij maar wil — ook buiten de openingsuren.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              De automaat is gevuld met onze eigen ambachtelijke smaken, rechtstreeks van de hoeve. Snel, gemakkelijk en altijd lekker.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Wil je weten waar de automaat staat of welke smaken beschikbaar zijn? Neem gerust contact op.
            </p>

            <NavLink
              to="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold font-sirenia shadow-md hover:bg-blue-600 hover:-translate-y-1 transition-all duration-200"
            >
              Meer info →
            </NavLink>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold font-sirenia text-center mb-12">Waarom de ijsautomaat?</h2>
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

      {/* CTA BANNER */}
      <section className="bg-blue-500 rounded-3xl max-w-5xl mx-auto px-6 py-14 mb-20 text-center shadow-lg">
        <h2 className="text-3xl font-bold font-sirenia text-white mb-3">Altijd zin in ijs?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Kom langs en ontdek onze ijsautomaat. Vers hoeveijs, altijd beschikbaar.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl font-sirenia hover:bg-blue-50 transition-colors shadow"
        >
          Contacteer ons
        </NavLink>
      </section>

    </div>
  );
};

export default IjsautomatenPage;
