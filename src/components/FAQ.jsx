import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Mitä palveluita majoitus tarjoaa?',
      answer: 'Borealis Casa tarjoaa kodikkaat tilat perheille ja pariskunnille, mukaan lukien täysin varustettu keittiö, olohuone ja makuuhuoneet.',
    },
    {
      question: 'Onko majoitus esteetön?',
      answer: 'Kyllä, majoitus on suunniteltu esteettömäksi ja sopii myös liikuntarajoitteisille vieraille.',
    },
    {
      question: 'Voinko tuoda lemmikkini mukaan?',
      answer: 'Lemmikit ovat tervetulleita, mutta ilmoita siitä etukäteen varauksen yhteydessä.',
    },
    {
      question: 'Mitä maksaa yöpyminen?',
      answer: 'Hinnat vaihtelevat kauden mukaan. Ota yhteyttä saadaksesi tarkan tarjouksen.',
    },
    {
      question: 'Kuinka pääsen majoitukseen?',
      answer: 'Majoitus sijaitsee Oulun Kellossa. Tarjoamme yksityiskohtaiset saapumisohjeet varauksen yhteydessä.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <HelpCircle size={48} className="text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800">UKK</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;