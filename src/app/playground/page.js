import Link from "next/link";

export default function Playground() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">🚧 Coming Soon</h1>
        <p className="text-gray-400 text-lg mb-6">
          This page or feature is under construction and will be available in
          the upcoming days.
        </p>
        <p className="text-gray-300 mb-8">
          In the meantime, feel free to explore our other services, DSA
          problems, and courses to keep learning and building your skills.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
          <Link
            href={"/dsa"}
            className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center gap-2 shadow-sm hover:shadow-md shadow-white/40"
          >
            Master DSA
          </Link>
          <Link href={"/languages"}>
            <button className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center gap-2 shadow-sm hover:shadow-md shadow-white/40">
              Learn Languages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
