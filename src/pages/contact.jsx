// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-6">Contact Us</h1>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 mb-4 rounded" />
        <button className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800">Send Message</button>
      </form>
    </div>
  );
}
