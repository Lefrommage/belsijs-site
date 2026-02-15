import IMG_3671 from "../assets/belfotos/IMG_3671.jpg";
import bel from "../assets/belfotos/bel.jpg";
import geitfoto from "../assets/belfotos/geitfoto.jpg";
import meergeiten from "../assets/belfotos/meergeiten.jpg";
import isaijs from "../assets/belfotos/isaijs.jpg";
import { NavLink } from "react-router-dom";
import AanbodHomePage from "../components/AanbodHomePage";

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

      <section className="mt-16 px-6 text-center">
        <AanbodHomePage />
      </section>
    </div>
  );
};

export default HomePage;
