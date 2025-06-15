export default function ComingSoonPage() {
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
        <a
          href="/dsa"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          🚀 Explore DSA Content
        </a>
      </div>
    </div>
  );
}
