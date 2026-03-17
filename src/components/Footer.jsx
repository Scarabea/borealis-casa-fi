import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-6">Borealis Casa</h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/borealiscasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/borealiscasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.threads.net/@borealiscasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <span className="text-2xl">🧵</span> {/* Placeholder for Threads */}
          </a>
        </div>
        <p className="text-gray-400">
          © 2024 Borealis Casa. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  );
};

export default Footer;