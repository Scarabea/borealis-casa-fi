import { motion } from 'framer-motion';

const Guestbook = () => {
  // Assume images are placed in public/images/guestbook/
  const images = [
    '/images/guestbook/kuva1.jpg',
    '/images/guestbook/kuva2.jpg',
    '/images/guestbook/kuva3.jpg',
    '/images/guestbook/kuva4.jpg',
    // Lisää kuvia tarpeen mukaan
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Virtuaalinen vieraskirja
        </h2>
        <div className="overflow-x-auto flex space-x-8 pb-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 h-96 bg-white rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform"
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={img}
                alt={`Guestbook page ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;