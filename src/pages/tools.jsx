// src/pages/Tools.jsx
export default function Tools() {
  return (
    <div className="min-h-screen p-10 bg-white text-center">
      <h1 className="text-4xl font-bold text-teal-700 mb-4">Tools & Services</h1>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Choose from a wide variety of tools and emergency services available instantly. All items are vetted, safe, and delivered by experts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded shadow">Plumbing Kit</div>
        <div className="bg-gray-100 p-6 rounded shadow">Wiring Tools</div>
        <div className="bg-gray-100 p-6 rounded shadow">Leak Repair Kit</div>
      </div>
    </div>
  );
}
