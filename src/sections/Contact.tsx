import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, defaultMessage } from '../utils/whatsapp';

const Contact: React.FC = () => {
  const whatsappLink = generateWhatsAppLink('082245756875', defaultMessage);
  
  return (
    <section id="kontak" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontak Kami</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau untuk reservasi mobil rental.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-1">Alamat Garasi</h4>
                    <p className="text-secondary-600">Jl. Sidosermo V No.26, Surabaya, Jawa Timur</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-1">WhatsApp</h4>
                    <p className="text-secondary-600">082245756875</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-1">Jam Operasional</h4>
                    <p className="text-secondary-600">Setiap Hari, 06.00 - 22.00 WIB</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5632888865396!2d112.7550699!3d-7.3027842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb5145cb7391%3A0x5bf6e7a3326c595a!2sJl.%20Sidosermo%20V%20No.26%2C%20Sidosermo%2C%20Kec.%20Wonocolo%2C%20Surabaya%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1654789012345!5m2!1sen!2sid" 
                className="w-full h-full min-h-[400px] rounded-xl shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prakasa Rent Car Surabaya Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;