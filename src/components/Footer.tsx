export default function Footer() {
  return (
    <footer className="mt-24 bg-transparent text-[#f3a905] px-8 md:px-12 lg:px-16 pt-10 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:text-left">
          <h2 className="text-3xl uppercase mb-4 font-sirenia font-bold">
            Adres
          </h2>
          <p className="font-sirenia text-xl text-gray-500">Sluisstraat 4</p>
          <p className="font-sirenia text-xl text-gray-500">
            9170 Sint-Gillis-Waas
          </p>
        </div>

        <div className="md:text-center">
          <h2 className="text-3xl uppercase mb-4 font-sirenia font-bold">
            Openingsuren
          </h2>
          <p className="font-sirenia text-xl text-gray-500">
            Zaterdagochtend: 9u - 12u
          </p>
        </div>

        <div className="md:text-right">
          <h2 className="text-3xl uppercase mb-4 font-sirenia font-bold">
            Contact
          </h2>
          <a
            href="mailto:bels.ijs@outlook.com"
            className="font-sirenia text-xl text-gray-500"
          >
            bels.ijs@hotmail.com
          </a>
          <p className="font-sirenia text-xl text-gray-500 mt-2">
            📞 0478 45 83 90
          </p>
        </div>
      </div>
    </footer>
  );
}
