import React from "react";
import { Link } from "react-router-dom";
import whatsappImg from "../assets/whatsapp.jpg";
import servicesImg from "../assets/services.jpg";
import locationImg from "../assets/location.jpg";
import bookingImg from "../assets/booking.jpg";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-teal-600 text-white flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">RapidFix</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:bg-white hover:text-teal-600 px-3 py-1 rounded">Home</Link></li>
          <li><Link to="/about" className="hover:bg-white hover:text-teal-600 px-3 py-1 rounded">About Us</Link></li>
          <li><Link to="/contact" className="hover:bg-white hover:text-teal-600 px-3 py-1 rounded">Contact Us</Link></li>
          <li><Link to="/tools" className="hover:bg-white hover:text-teal-600 px-3 py-1 rounded">Tools</Link></li>
          <li><a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="bg-white text-teal-600 px-3 py-1 rounded">Book Now</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-100 text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Electrical & Plumbing Services — Just a Click Away, Right at Your Doorstep.</h1>
        <p className="text-lg mb-6">Help at your doorstep in 30 minutes - guarantee</p>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700">Book Now</a>
      </header>

      {/* Steps Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-10">GET YOUR SERVICES OR TOOLS IN LESS THAN 30 MINUTES</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { img: whatsappImg, title: "01 Just send a hi", text: "Enter WhatsApp, send a hi, and the services and tools will be shared..." },
            { img: servicesImg, title: "02 Select the items", text: "Select the items you need with quantity..." },
            { img: locationImg, title: "03 Share the location", text: "Share the location through WhatsApp..." },
            { img: bookingImg, title: "04 Book your slot", text: "Slot booking based on your convenient time..." }
          ].map((step, i) => (
            <div key={i} className="w-64">
              <img src={step.img} alt={step.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Prompt */}
      <section className="bg-gray-50 text-center py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Hi! We're RapidFix</h2>
        <p className="mb-6">Are you a busy professional struggling to find time to repair or replace plumbing and electrical equipment at your home?</p>
        <Link to="/about" className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700">More</Link>
      </section>

      {/* Partner Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Partner up with technicians</h2>
        <p>Ensuring their quality of work and delivering straight to your doorstep.</p>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white text-center py-4">
        <p>&copy; 2025 RapidFix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
