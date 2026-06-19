import depaep from "../assets/belfotos/hermansdepaep_06.jpg";
import geiten from "../assets/belfotos/melken.jpg";
import geiten2 from "../assets/belfotos/meergeiten.jpg";

const OntdekPage = () => {
  return (
    <main className="min-h-screen bg-transparent px-6 py-10 md:px-12 lg:px-20">
      <section id="overons" className="scroll-mt-28">
        <h1 className="text-6xl font-bold font-sirenia flex justify-center mb-20">
          Over Ons
        </h1>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Linker kolom - afbeeldingen */}
          <div className="space-y-6">
            <img
              src={depaep}
              alt="Image 1"
              className="w-full rounded-3xl object-cover shadow-md"
            />

            <img
              src={geiten}
              alt="Image 2"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>

          {/* Rechter kolom - tekst */}
          <div className="space-y-10 text-[#1f1f1f]">
            <section>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
                Wat is Bel’s ijs?
              </h2>
              <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
                Bel’s ijs is een heerlijk hoeve ijs, gemaakt met dagverse
                geitenmelk. Ons ijs is volledig op basis van geitenmelk, het is
                dus ook het ideale alternatief voor mensen met koemelkallergie
                of lactose<span className="font-sirenia font-light">-</span>
                intolerantie.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
                Wie is Isabelle?
              </h2>
              <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
                Ik ben Isabelle, een gedreven, enthousiaste{" "}
                <span className="font-sirenia font-light">24</span> jarige
                jongedame. Ook ben ik de oudste dochter van Filip en Kristien,
                die het bedrijf ‘Rodemoerhoeve’ hebben opgestart. Ik ben hier
                rechts op de foto te zien mijn broer, zus en ouders. In de zomer
                van <span className="font-sirenia font-light">2024</span> ben ik
                begonnen met ijs maken. Mocht je je afvragen waarom ik hier mee
                gestart ben, is het omdat ik een enorme ijsfan ben en graag
                experimenteer met voeding. Door mijn achtergrond als industrieel
                ingenieur in de voeding, ontstond het idee om mijn eigen
                ijsrecepten te ontwikkelen. Na het volgen van verschillende
                cursussen en mijn eigen productieruimte te creëren is Bel’s ijs
                ontstaan.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
                Vanwaar komt de verse melk?
              </h2>
              <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
                De verse melk die gebruikt wordt om het hoeve ijs te maken is
                afkomstig van de 750 geiten die we op ons melkgeitenbedrijf
                hebben. Deze geiten worden 2 keer per dag gemolken, ’s ochtends
                en ‘s avonds. Naast het produceren van heerlijke,
                kwaliteitsvolle melk zetten wij ons in om ons bedrijf
                toekomstbestendig te maken, waarbij duurzaamheid en innovatie
                centraal staan. Hierbij werken we vanuit een visie met veel
                aandacht voor dierenwelzijn en omgeving.{" "}
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="waaromgeitenmelk" className="scroll-mt-28">
        <h1 className="text-6xl font-bold font-sirenia flex justify-center mb-15 mt-25">
          Waarom Geitenmelk?
        </h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* links */}
          <div>
            <img
              src={geiten2}
              alt="Image"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>

          {/* rechts */}
          <div className="flex flex-col justify-center">
            <section>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
                Gezond & licht verteerbaar{" "}
              </h2>

              <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
                Geitenmelk heeft een unieke en heerlijke smaak en het is licht
                verteerbaar. De lichte verteerbaarheid van geitenmelk kan
                verklaard worden door het type eiwit in de melk. Geitenmelk
                heeft een ander type caseine eiwit dan koemelk waardoor het
                beter verteerbaar is en minder spijsverteringsproblemen
                veroorzaakt. Het kan een geschikt alternatief zijn voor mensen
                met koemelkallergie. Kortom, het is niet alleen lekker maar ook
                nog eens gezond.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28">
        <h1 className="text-6xl font-bold font-sirenia flex justify-center mb-15 mt-25 font-sirenia">
          Veel gestelde vragen?
        </h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* item */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
              Smaakt het naar geitenkaas?
            </h2>
            <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
              Het ijs smaakt helemaal niet naar geitenkaas. Je proeft zelfs
              nauwelijks het verschil met koemelkijs.{" "}
            </p>
          </div>

          {/* item */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
              Wat als je koemelkallergie hebt?
            </h2>
            <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
              Ijs op basis van geitenmelk kan een geschikt alternatief bieden
              voor mensen die last hebben van koemelk. Geitenmelk is
              gemakkelijker verteerbaar.
            </p>
          </div>

          {/* item */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl font-sirenia">
              Kan ik een gepersonaliseerde bestelling plaatsen?
            </h2>
            <p className="text-xl leading-6 text-gray-800 font-basicsans font-bold">
              Ja, dat kan zeker. Stuur ons gerust een berichtje en we bekijken
              samen de mogelijkheden.{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OntdekPage;
