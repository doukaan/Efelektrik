import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-l from-blue-600 to-blue-950 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">EFE ELEKTRONİK</h3>
          <p className="text-sm font-bold">SİNAN YURTERİ</p>
          
          <p className="text-sm text-gray-300">
           
            <a
              href="https://www.doukaan.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Design By DOĞU KAAN ILGAZ
            </a>
          </p>
        </div>

        {/* Sağ Sütun */}
        <div className="flex flex-col space-y-4 text-sm text-gray-300">
          <h1 className="text-white text-xl font-bold">Bilgilendirme</h1>
          <p className="w-[80%]">
          WEB SİTEMİZDE SATIŞ YAPILMAMAKTADIR TEKLİF ALMAK İÇİN LÜTFEN BİZE ULAŞINIZ.
          </p>
          <p className="w-[80%]">Copyright © 2024 EFE ELEKTRONİK</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
