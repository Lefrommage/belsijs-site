import IMG_3671 from "../assets/belfotos/IMG_3671.jpg";
import bel from "../assets/belfotos/bel.jpg";
import geitfoto from "../assets/belfotos/geitfoto.jpg";
import meergeiten from "../assets/belfotos/meergeiten.jpg";
import isaijs from "../assets/belfotos/isaijs.jpg";
import { NavLink } from "react-router-dom";
import AanbodHomePage from "../components/AanbodHomePage";
import GoogleReview from "../components/GoogleReview";

const reviews = [
  { id: 1, name: "Lien Vermeersch", rating: 5, date: "2 weken geleden", text: "Heerlijk ijs! Vers en romig, je proeft dat het ambachtelijk gemaakt is. We komen zeker terug." },
  { id: 2, name: "Thomas De Smedt", rating: 5, date: "1 maand geleden", text: "Het lekkerste schepijs uit de buurt. De vanille is een absolute aanrader." },
  { id: 3, name: "An Peeters", rating: 5, date: "3 weken geleden", text: "Geweldige ijstaart besteld voor een verjaardagsfeestje. Iedereen was vol lof!" },
];


const HomePage = () => {
  const images = [IMG_3671, bel, geitfoto, meergeiten, isaijs];

  return (
    <div className="relative min-h-screen">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto flex flex-col">
        {/* Side lines (stoppen aan einde hero/marquee) */}
        <div className="pointer-events-none absolute inset-0 z-40">
          <div className="max-w-7xl mx-auto h-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300/40" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300/40" />
          </div>
        </div>

        {/* Titel */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              font-extrabold text-amber-500 font-sirenia
            "
          >
            Bel’s ijs
          </h1>

          <h2
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-extralight text-gray-400 mb-6 font-sirenia
            "
          >
            Hebde gei't al geproefd?
          </h2>
        </div>

        {/* MARQUEE */}
        <div
          className="
            relative
            overflow-hidden
            min-h-[260px]
            sm:min-h-[320px]
            md:min-h-[370px]
            lg:min-h-[420px]
          "
        >
          <div className="absolute left-0 top-0 flex gap-5 w-max animate-marquee px-6">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="
                  h-[250px] w-[250px]
                  sm:h-[300px] sm:w-[300px]
                  md:h-[350px] md:w-[350px]
                  lg:h-[400px] lg:w-[400px]
                  object-cover rounded-2xl shadow-lg flex-shrink-0
                "
              />
            ))}
          </div>
        </div>

        {/* Bottom block */}
        <div className="flex flex-col items-center text-center py-6">
          <NavLink
            to="/aanbod"
            className="
              bg-amber-500 text-white
              px-4 py-2
              sm:px-5 sm:py-2.5
              md:px-6 md:py-3
              rounded-lg font-semibold
              transition hover:bg-amber-600 hover:-translate-y-1 shadow-md
              text-sm sm:text-base md:text-lg
              font-sirenia
            "
          >
            Ontdek ons aanbod →
          </NavLink>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <hr className="border-t border-gray-200" />
      </div>

      <section className="mt-24 px-6 text-center">
        <AanbodHomePage />
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Over Bel's ijs */}
      <section className="mt-24 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        <img
          src={isaijs}
          alt="Over Bel's ijs"
          className="w-full md:w-1/2 rounded-3xl object-cover shadow-lg aspect-square"
        />
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold font-sirenia mb-6">Over Bel's ijs</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Recensies */}
      <section className="mt-24 mb-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold font-sirenia mb-2">Wat onze klanten zeggen</h2>
        <p className="text-gray-400 text-sm mb-8">Beoordelingen via Google</p>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <GoogleReview key={r.id} name={r.name} rating={r.rating} date={r.date} text={r.text} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
