import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '2348064126498'; // Your WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20EJ%20Technologies`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 animate-bounce"
      title="Chat with us on WhatsApp Business"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-2.176 0-4.319.525-6.359 1.529L2.89 3.71l1.675 6.186a10.335 10.335 0 0 0-1.59 5.694c0 5.735 4.676 10.411 10.411 10.411 2.763 0 5.356-1.059 7.315-2.979 1.959-1.92 3.04-4.505 3.04-7.432 0-5.735-4.675-10.411-10.411-10.411M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
