import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <label className="block">
          <span className="text-gray-700">Nom</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
      <p className="text-center mt-8">Email: contact@aitripplanner.com</p>
      <p className="text-center">Téléphone: +33 1 23 45 67 89</p>
    </section>
  );
};

export default Contact;
