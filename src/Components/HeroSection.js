import React, { useState, useEffect } from "react";

function HeroSection() {
  const images = [
    '/İmages/Camera.png',
    '/İmages/görüntülü.png', 
    '/İmages/tv.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Resim değiştirme işlevi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Her 5 saniyede bir geçiş yapar

    return () => clearInterval(interval); // Temizleme işlemi
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Evinizin Teknoloji Danışmanı</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Tüm eletronik ve güvenlik ihtiyaçlarınızda yanınızdayız.
        </p>
        <button className="bg-[#214083] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          <a href="#Contact">Bize Ulaşın</a>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
