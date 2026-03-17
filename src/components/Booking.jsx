import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    nimi: '',
    sahkoposti: '',
    puhelinnumero: '',
    ajankohta: '',
    viesti: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Kiitos yhteydenotosta! Otamme sinuun yhteyttä pian.');
    setFormData({
      nimi: '',
      sahkoposti: '',
      puhelinnumero: '',
      ajankohta: '',
      viesti: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Suoravaraus
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Ota yhteyttä
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={24} className="text-blue-600 mr-4" />
                  <span className="text-gray-700">+358 40 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="text-blue-600 mr-4" />
                  <span className="text-gray-700">info@borealiscasa.fi</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nimi" className="block text-gray-700 mb-2">Nimi</label>
                <input
                  type="text"
                  id="nimi"
                  name="nimi"
                  value={formData.nimi}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="sahkoposti" className="block text-gray-700 mb-2">Sähköposti</label>
                <input
                  type="email"
                  id="sahkoposti"
                  name="sahkoposti"
                  value={formData.sahkoposti}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="puhelinnumero" className="block text-gray-700 mb-2">Puhelinnumero</label>
                <input
                  type="tel"
                  id="puhelinnumero"
                  name="puhelinnumero"
                  value={formData.puhelinnumero}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="ajankohta" className="block text-gray-700 mb-2">Toivottu ajankohta</label>
                <input
                  type="text"
                  id="ajankohta"
                  name="ajankohta"
                  value={formData.ajankohta}
                  onChange={handleChange}
                  placeholder="esim. 15.-20. kesäkuuta"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="viesti" className="block text-gray-700 mb-2">Viesti</label>
                <textarea
                  id="viesti"
                  name="viesti"
                  value={formData.viesti}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Lähetä viesti
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;