export const generateWhatsAppLink = (phone: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
};

export const defaultMessage = 'Halo, saya tertarik untuk menyewa mobil di Prakasa Rent Car. Bisa minta informasi lebih lanjut?';