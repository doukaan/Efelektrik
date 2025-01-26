import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-l from-blue-700 to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-2">Hakkımızda</h2>
        <div className="w-32 md:w-64 h-1 bg-white mx-auto mb-8 md:mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/İmages/efedükkan.png"
              alt="About Us"
              className="w-full max-w-md md:w-3/4 rounded-3xl object-cover"
            />
          </div>
          
          <div className="text-white text-sm md:text-base">
            <p className="mb-4 md:mb-6">
              Efe Elektronik, teknoloji dünyasında uzmanlaşmış ve müşteri odaklı hizmet anlayışıyla öne çıkan bir elektronik çözümler şirketidir. 
              2000'li yılların başından beri sektörde faaliyet gösteren firma, güvenlik sistemleri, görüntülü ve sesli iletişim teknolojileri, 
              uydu sistemleri ve ev elektroniği alanlarında geniş bir ürün yelpazesi sunmaktadır.
            </p>
            
            <p className="mb-4 md:mb-6">
              Şirketin temel felsefesi, müşterilerine yüksek kaliteli teknolojik çözümler sunmanın yanı sıra, 
              profesyonel kurulum ve satış sonrası destek hizmetleriyle tam bir güven ortamı yaratmaktır. 
              Efe Elektronik, her müşterisinin benzersiz ihtiyaçlarını anlayarak, kişiye özel çözümler geliştirme konusunda uzmanlaşmıştır.
            </p>
            
            <p className="mb-0">
              Modern teknolojinin tüm imkânlarını kullanan Efe Elektronik, güvenlik kameraları, tv sistemleri, uydu çözümleri, 
              diyafon sistemleri ve diğer elektronik ürünlerde müşterilerine en son teknoloji ürünlerini sunmaktadır. 
              Şirket, yerli ve uluslararası markaların en kaliteli ürünlerini bünyesinde barındırarak, müşterilerine geniş bir seçenek yelpazesi sağlamaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;