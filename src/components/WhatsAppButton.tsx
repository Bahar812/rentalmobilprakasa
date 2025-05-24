import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, defaultMessage } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  label?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phone, 
  message = defaultMessage,
  label = 'Chat'
}) => {
  const whatsappLink = generateWhatsAppLink(phone, message);

  return (
    <>
      {/* Mobile floating button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Desktop fixed button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white rounded-full shadow-lg hidden md:flex items-center gap-2 px-6 py-3 hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={20} />
        <span className="font-medium">{label}</span>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;