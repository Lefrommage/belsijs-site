import hermans from "../assets/belfotos/hermansdepaep_06.jpg";
import { NavLink } from "react-router-dom";

const features = [
  { icon: "🎪", title: "Evenementen", text: "Festivals, bruiloften, bedrijfsfeesten — wij komen naar jou." },
  { icon: "🍦", title: "Vers schepijs", text: "Ambachtelijk ijs rechtstreeks van de hoeve, ter plekke geserveerd." },
  { icon: "📋", title: "Offerte op maat", text: "Geen standaardpakket. Wij stemmen alles af op jouw evenement." },
];

const FoodtruckInfoPage = () => {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-amber-100 rounded-b-[60px] px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          {/* Foto */}
          <div className="w-full md:w-1/2 shrink-0">
            <img
              src={hermans}
              alt="Bel's ijs foodtruck"
              className="w-full rounded-3xl object-cover shadow-xl aspect-4/3"
            />
          </div>

          {/* Tekst */}
          <div className="md:w-1/2 text-left">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Huur onze ijskar</p>
            <h1 className="text-5xl font-bold font-sirenia mb-6 text-gray-800">Foodtruck</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Heb jij deze foodtruck al eens gezien? Onze knalgele ijskar kan de ideale aanvulling zijn voor uw evenement!
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Organiseer je iets groot of klein? Bel's ijs kan voor u de ideale oplossing zijn!
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Stuur ons een berichtje om de mogelijkheden te bespreken en een offerte op maat te maken.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>

            <NavLink
              to="/contact"
              className="inline-block bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold font-sirenia shadow-md hover:bg-amber-600 hover:-translate-y-1 transition-all duration-200"
            >
              Vraag een offerte aan →
            </NavLink>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold font-sirenia text-center mb-12">Waarom onze foodtruck?</h2>
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
      <section className="bg-amber-500 rounded-3xl max-w-5xl mx-auto px-6 py-14 mb-20 text-center shadow-lg">
        <h2 className="text-3xl font-bold font-sirenia text-white mb-3">Interesse?</h2>
        <p className="text-amber-100 mb-8 max-w-xl mx-auto">
          Neem contact op en we bespreken samen wat mogelijk is voor jouw evenement.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-white text-amber-600 font-semibold px-8 py-3 rounded-xl font-sirenia hover:bg-amber-50 transition-colors shadow"
        >
          Contacteer ons
        </NavLink>
      </section>

    </div>
  );
};

export default FoodtruckInfoPage;
