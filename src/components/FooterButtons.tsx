export default function Buttons() {
  return (
    <div >
      <div className="flex justify-center p-3 gap-0">
        <button className="px-6 py-3 text-lg  bg-black text-white hover:opacity-90 transition">
          Login
        </button>

        <button className="px-6 py-3 text-lg rounded-full bg-red-500 text-white hover:bg-red-600 transition">
          Join Osmo
        </button>
      </div>
    </div>
  );
}