import { motion } from 'framer-motion';
import { MapPin, Heart, Users } from 'lucide-react';

const LocalGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Paikallinen opas
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Perheet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 p-8 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Users size={32} className="text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Perheet</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-600 mr-2 mt-1" />
                <span>Vauhtipuisto - hauskaa toimintaa koko perheelle</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-600 mr-2 mt-1" />
                <span>Tietomaa - oppimista ja seikkailua</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-600 mr-2 mt-1" />
                <span>Luontoretket Oulun kauniissa ympäristössä</span>
              </li>
            </ul>
          </motion.div>

          {/* Pariskunnat */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-pink-50 p-8 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Heart size={32} className="text-pink-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Pariskunnat</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <MapPin size={20} className="text-pink-600 mr-2 mt-1" />
                <span>Rauhalliset luontokävelyt ja piknikit</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-pink-600 mr-2 mt-1" />
                <span>Romanttiset illalliset paikallisissa ravintoloissa</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-pink-600 mr-2 mt-1" />
                <span>Aurinkolaskut Oulujoen rannalla</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalGuide;