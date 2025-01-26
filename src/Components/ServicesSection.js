"use client";
import React from "react";

const LegalServicesCard = ({ title, imageSrc }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden shadow-gray-300 hover:shadow-gray-500 mx-auto">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
      <div className="flex justify-center items-center mt-2 p-2">
        <button className="bg-[#214083] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          <a href="tel:+90 (552) 422 50 50">
            <p>Teklif Al</p>
          </a>
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Televizyon Tamiri",
      imageSrc: "/İmages/tvcard.png",
    },
    {
      title: "Uydu Sistemleri",
      imageSrc: "/İmages/uyducard.png",
    },
    {
      title: "Ses Sistemleri",
      imageSrc: "/İmages/sescard.png",
    },
    {
      title: "Kamera Sistemleri",
      imageSrc: "/İmages/yenicam.png",
    },
    {
      title: "Görüntülü Diyafon ",
      imageSrc: "/İmages/diyafoncard.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-[#2563eb] font-bold text-center mb-6">Hizmetlerimiz</h2>
      <div className="w-64 h-1 bg-[#2f6aec] mx-auto mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {services.map((service, index) => (
          <LegalServicesCard 
            key={index} 
            title={service.title} 
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
