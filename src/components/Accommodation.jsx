import { motion } from 'framer-motion';
import { Home, Users, MapPin } from 'lucide-react';

const Accommodation = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Home size={48} className="text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Majoituksen tiedot
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kapasiteetti</h3>
              <p className="text-gray-700 text-lg">
                Optimaalinen: 3-5 henkilöä<br />
                Maksimi: 8 henkilöä
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MapPin size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sijainti</h3>
              <p className="text-gray-700 text-lg">
                Kello, Oulu<br />
                Pöllönmutka 10
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;