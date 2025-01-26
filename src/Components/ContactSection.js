import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
const ContactSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">İletişim</h2>
        <div className="w-48 h-1 bg-[#2f6aec] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className='border-2  p-4 rounded-lg bg-gradient-to-t from-blue-600 to-blue-950 '>
            <h3 className="text-2xl font-bold mb-6 text-white">Bize Ulaşın</h3>
            
            <div className="space-y-4 ">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-white mr-4" />
                <a className="w-1/2 text-white">
                  Hisar Mah. Tuna Caddesi No:6/22/C Bağlum/Ankara
                </a>
              
              </div>
              
              <div className="flex items-center">
 
                      <a
                        href="tel:+905524225050"
                        className="flex items-center text-white transition-colors"
                      >
                        <Phone className="w-6 h-6 text-white mr-4" />
                        <p>+90 552 422 50 50</p>
                      </a>
                    </div>

                    <div className="flex items-center">
                    
                      <a
                        href="mailto:gursel@tiger.web.tr"
                        className="flex items-center text-white transition-colors"
                      >
                        <Mail className="w-6 h-6 text-white mr-4" />
                        <p>snnyurteri@gmail.com</p>
                      </a>
                    </div>

            </div>

            
          </div>

          <div className='border-2  bg-gradient-to-t from-blue-600 to-blue-950 p-4 rounded-lg' >
            <h3 className="text-2xl font-bold mb-6 text-white">Konum</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3054.2756654433133!2d32.8413236!3d40.0469487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408209c92fd14cfd%3A0x5d678651e8f9026f!2zRUZFIEVMRUtUUk9OxLBLIFPEsE5BTiBZVVJURVLEsA!5e0!3m2!1str!2str!4v1733509419448!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              className="w-full h-full rounded-lg"
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
