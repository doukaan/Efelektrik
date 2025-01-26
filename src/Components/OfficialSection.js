import React from 'react';

const OfficialSection = () => {
  return (
    <div className="relative w-full ">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Title Section */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-xl font-bold text-white mb-2">Yetkili Satıcı</h2>
          <div className="w-10 md:w-16 h-1 bg-white mx-auto"></div>
        </div>

        {/* Image Container */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* First Image - Nova */}
          <div className="w-full md:w-1/2 max-w-md flex justify-center">
            <img
              src="/İmages/nova.png"
              alt="Nova"
              className="w-full max-w-md h-auto rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Second Image - Apron */}
          <div className="w-full md:w-1/2 max-w-md flex justify-center">
            <img
              src="/İmages/apron2.png"
              alt="Apron"
              className="w-full max-w-md h-auto rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialSection;