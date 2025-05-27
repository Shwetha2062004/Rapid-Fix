// src/pages/Join.jsx
export default function Join() {
  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-6">Join as a Technician</h1>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow">
        <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 rounded" />
        <input type="text" placeholder="Phone Number" className="w-full p-3 mb-4 rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded" />
        <select className="w-full p-3 mb-4 rounded">
          <option>Service Expertise</option>
          <option>Plumbing</option>
          <option>Electrical</option>
        </select>
        <input type="text" placeholder="Availability" className="w-full p-3 mb-4 rounded" />
        <button className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800">Join Now</button>
      </form>
    </div>
  );
}
